<script setup>

import Navbar from "@/components/Navbar.vue";
import { ref } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

const form = ref({
  email: '',
  message: ''
});


const config = useRuntimeConfig();
const showSuccessMessage = ref(false);
console.log(config)
const handleSubmit = async () => {
  try {
    const apiSecretKey = config.secret;
    console.log(apiSecretKey)
    const response = await fetch(apiSecretKey, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      showSuccessMessage.value = true;
      form.value = { email: '', message: '' };
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 5000);
    } else {
      alert("Une erreur s'est produite lors de l'envoi du formulaire.");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire :", error);
    alert("Une erreur s'est produite lors de l'envoi du formulaire.");
  }
};

</script>

<template>
  <div>
  <Navbar />

  <div class="container">

    <section data-aos="fade-down" data-aos-duration="750" class="2xl:mt-20 xl:mt-0 sm:mt-16 mt-6 flex lg:flex-row flex-col lg:gap-5 gap-10 items-center ">

      <div class="bg-gold-200 rounded-lg text-black-100 p-10 font-semibold space-y-3 sm:w-[550px] w-[400px] ">

        <h2 class="sm:text-xl text-[18px] font-bold">Discutons de Vos Projets Web !</h2>

        <p class="lg:text-[16px] text-[14px]">
          Vous avez des idées ? Transformons-les en réalité numérique. Contactez-moi pour une expertise en développement web sur mesure, axée sur vos objectifs uniques. Votre projet mérite une attention particulière, et c'est exactement ce que je propose.
        </p>

        <p class="lg:text-[16px] text-[14px]">
          Contactez-moi directement par mail ou remplissez le formulaire de contact pour entamer une collaboration enrichissante.
        </p>

      </div>

      <div class="xl:w-[800px] sm:w-[550px] w-[400px]">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <div>
            <label for="email" class="block mb-2 text-[16px] font-medium text-gold-200 ">Email</label>
            <input v-model="form.email" type="email" name="email" class="shadow-sm text-black-100 text-sm rounded-lg border-gold-200  focus:ring-gold-200  block w-full p-2.5 " placeholder="nom@mail.com" required>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-[16px] font-medium text-gold-200 ">Message</label>
            <textarea v-model="form.message" name="message" rows="6" class="block p-2.5 w-full text-sm text-black-100 rounded-lg shadow-sm border border-gold-200 focus:ring-gold-200 focus:border-primary-500 " placeholder="Écrivez votre message..."></textarea>
          </div>

          <div>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-black-100 text-lg shadow">
              <div class="absolute inset-0 w-3 bg-gold-200 transition-all duration-[600ms] ease-out group-hover:w-full"></div>
              <span class="lg:text-[16px] text-[14px] relative text-gold-200 group-hover:text-black-100 font-semibold">Envoyer</span>
            </button>
          </div>
        </form>
      </div>

    </section>

    <div v-if="showSuccessMessage" class="mt-12 text-center">
      <p class="text-gold-200 font-bold"> Le message à bien été envoyé, je vous répondrais  <br class="md:hidden"> dans les plus brefs délais !</p>
    </div>

    <footer class="sm:pb-10 pb-14 2xl:mt-44 lg:mt-16 sm:mt-32 mt-24">
      <div class="flex justify-center items-center">
        <a data-aos="fade-up" data-aos-duration="500" href="https://github.com/mohamedDev69" target="_blank" class="text-gold-200 2xl:w-[4(px] w-[40px] hover:text-white mr-16 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
        </a>
        <a data-aos="fade-up" data-aos-duration="1000" href="https://www.linkedin.com/in/mohamed-chettah/" target="_blank" class="text-gold-200 2xl:w-[35px] w-[30px] hover:text-white mr-16 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
        </a>
        <a data-aos="fade-up" data-aos-duration="1500" href="mailto:mohamedchettah@gmail.com" class="text-gold-200 2xl:w-[44px] w-[39px] hover:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/></svg> </a>
      </div>
      <div class="text-center xl:text-[16px] text-[14px] text-gold-200 xl:mt-6 mt-14">
        © 2023 - Mohamed Chettah - Développeur Web
      </div>
    </footer>

  </div>
  </div>
</template>

<style scoped>
</style>

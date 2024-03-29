<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';
import BlocApparition from '@/components/BlocApparition.vue';

const animateCircles = () => {
  anime({
    targets: "#profil-img",
    easing: 'easeOutSine',
    translateY: 40,
    opacity: 1,
  });
};

const wrapLettersAndAnimate = () => {
  const textWrappers = document.querySelectorAll('.text-animation');
  // Hide the text before we do anything
  anime.set(textWrappers, { opacity: 0 });

  textWrappers.forEach((textWrapper) => {
    let textContent = textWrapper.textContent;
    let html = '';
    // Wrap each character in a span
    for (let character of textContent) {
      if (character.trim() !== '') {
        html += `<span class='letter'>${character}</span>`;
      } else {
        html += character; // Preserve whitespace characters
      }
    }
    textWrapper.innerHTML = html;
  });

  anime({
    targets: '.text-animation',
    opacity: 1,
  });

  anime.timeline({ loop: false })
      .add({
        targets: '.text-animation .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
      });
};

const animateIcon = (target, delay) => {
  anime({
    targets: target,
    easing: 'easeOutSine',
    translateY: 100,
    opacity: 1,
    delay: delay
  });
};

onMounted(() => {
  animateCircles();
  wrapLettersAndAnimate();
  animateIcon("#icon-github", 200);
  animateIcon("#icon-linkedin", 400);
  animateIcon("#icon-mail", 600);
});
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="2xl:mt-32 xl:mt-8">
        <div class="flex xl:justify-between xl:flex-row justify-center flex-col 2xl:mx-0 mx-4">
          <div class="xl:text-left text-center xl:mx-0" >
            <h1 class="text-animation opacity-0 2xl:text-7xl xl:text-5xl text-[38px] font-bold text-gold-200 md:mt-[60px] sm:mt-[80px] mt-[50px] info" >Développeur Web</h1>

            <h2 class="text-white mt-[50px] leading-8 2xl:text-2xl xl:text-1xl lg:text-[20px] text-[18px] ">
              Transformez votre idée en un site web exceptionnel  <br class="sm:block hidden ">  avec
              mon expertise  en développement web et création d'applications ! 🌐💡
            </h2>

            <a href="/documents/CV_Mohamed_Chettah.pdf" class="text-animation opacity-0 link-navbar text-gold-200 sm:text-2xl text-xl mt-[40px] hover:text-white" target="_blank">
              Télécharger CV
            </a>
          </div>

          <div class="flex xl:justify-start justify-center">
            <img id="profil-img" class="relative opacity-0 border-2 border-gold-200 rounded-full 2xl:w-[360px] xl:w-[300px] md:w-[310px] lg:w-[300px] w-64" src="/img/profil.jpg" alt="photo de profil"/>
          </div>
        </div>
      </div>

      <div class="flex sm:pb-20 pb-36 xl:justify-normal justify-center">
        <a id="icon-github" href="https://github.com/mohamedDev69" target="_blank" class="opacity-0 text-gold-200 w-[44px] hover:text-white mr-16 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
        </a>
        <a id="icon-linkedin" href="https://www.linkedin.com/in/mohamed-chettah/" target="_blank" class="opacity-0 text-gold-200 w-[35px] mt-1 hover:text-white mr-16 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
        </a>
        <a id="icon-mail" href="mailto:mohamedchettah@gmail.com" class="opacity-0 text-gold-200 w-[44px] hover:text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/></svg> </a>
      </div>

    </div>
  </div>

</template>

<style scoped>
.letter {
  display: inline-block;
  line-height: 1em;
}
</style>

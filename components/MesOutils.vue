<script setup>
import anime from "animejs";
import { ref, onMounted, onUnmounted } from 'vue';

function animateIconsTools(){
  anime({
    targets: '.splide__slide',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 250,
  });
}
function animateIcon(target, delay) {
  anime({
    targets: target,
    easing: 'easeOutSine',
    translateY: 100,
    opacity: 1,
    delay: delay
  });
}


onMounted(() => {
  animateIcon("#icon-github", 200);
  animateIcon("#icon-linkedin", 400);
  animateIcon("#icon-mail", 600);
  animateIconsTools()
});



</script>

<template>

  <div class="sm:mt-32 mt-40 mb-32">


      <h2 class="sm:text-3xl text-2xl text-gold-200 font-bold sm:text-left text-center"> Mes Outils </h2>


    <div class="ml-6 sm:mt-16 mt-20">
      <h3 class="text-gold-200 font-bold sm:text-2xl text-xl lg:text-left text-center "> Développement Web</h3>
      <div class="flex lg:gap-20 gap-3 mt-12">

        <div class="lg:flex lg:gap-20 gap-10 lg:mx-0 mx-auto">
          <img class="md:w-24 w-16" src="/img/logos/html.png" alt="html logo">
          <a target="_blank" href="https://tailwindcss.com/"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/tailwind.png" alt="tailwind logo"></a>
        </div>

        <div class="lg:flex md:gap-20 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://www.php.net/"><img class="md:w-24 w-16" src="/img/logos/php.png" alt="php logo"></a>
          <a target="_blank" href="https://laravel.com/"><img class="md:w-24 w-16 lg:mt-0 mt-10 " src="/img/logos/laravel.png" alt="laravel logo"></a>
        </div>

        <div class="lg:flex md:gap-20 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://vuejs.org/"><img class="md:w-24 w-16 " src="/img/logos/vuejs.png" alt="vuejs logo"></a>
          <a target="_blank" href="https://nuxt.com/"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/nuxt.png" alt="nuxt logo"></a>
        </div>


      </div>
    </div>

    <div class="ml-6 sm:mt-16 mt-20" >
      <h3 class="text-gold-200 font-bold sm:text-2xl text-xl  lg:text-left text-center"> Applications - Logiciels </h3>
      <div class="flex lg:gap-32 gap-5 mt-10" >

        <div class="lg:flex lg:gap-32 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://github.com/"><img class="md:w-24 w-16" src="/img/logos/mdi_github.png" alt="github logo"></a>
          <a target="_blank" href="https://www.jetbrains.com/fr-fr/phpstorm/"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/devicon-plain_phpstorm.png" alt="php storm logo"></a>
        </div>

        <div class="lg:flex md:gap-32 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://www.figma.com/fr/"><img class="md:w-24 w-16" src="/img/logos/solar_figma-bold-duotone.png" alt="figma logo"></a>
          <a target="_blank" href="https://www.notion.so/fr-fr"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/simple-icons_notion.png" alt="notion logo"></a>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>

<script setup>
import anime from "animejs";
import { ref, onMounted, onUnmounted } from 'vue';

function animateIconsTools(){
  anime({
    targets: '#html5',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 250,
  });
  anime({
    targets: '#tailwind',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 500,
  });
  anime({
    targets: '#php',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 750,
  });
  anime({
    targets: '#laravel',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1000,
  });
  anime({
    targets: '#vuejs',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1250,
  });
  anime({
    targets: '#nuxt',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1500,
  });
  anime({
    targets: '#github',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 1750,
  });
  anime({
    targets: '#phpstorm',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2000,
  });
  anime({
    targets: '#figma',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2250,
  });
  anime({
    targets: '#notion',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 2500,
  });
}

onMounted(() => {
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
          <img id="html5" class="md:w-24 w-16" src="/img/logos/html.png" alt="html logo">
          <a target="_blank" href="https://tailwindcss.com/"><img id="tailwind" class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/tailwind.png" alt="tailwind logo"></a>
        </div>

        <div class="lg:flex md:gap-20 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://www.php.net/"><img id="php" class="md:w-24 w-16" src="/img/logos/php.png" alt="php logo"></a>
          <a target="_blank" href="https://laravel.com/"><img id="laravel" class="md:w-24 w-16 lg:mt-0 mt-10 " src="/img/logos/laravel.png" alt="laravel logo"></a>
        </div>

        <div class="lg:flex md:gap-20 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://vuejs.org/"><img id="vuejs" class="md:w-24 w-16 " src="/img/logos/vuejs.png" alt="vuejs logo"></a>
          <a target="_blank" href="https://nuxt.com/"><img id="nuxt" class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/nuxt.png" alt="nuxt logo"></a>
        </div>


      </div>
    </div>

    <div class="ml-6 sm:mt-16 mt-20" >
      <h3 class="text-gold-200 font-bold sm:text-2xl text-xl  lg:text-left text-center"> Applications - Logiciels </h3>
      <div class="flex lg:gap-32 gap-5 mt-10" >

        <div class="lg:flex lg:gap-32 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://github.com/"><img id="github" class="md:w-24 w-16" src="/img/logos/mdi_github.png" alt="github logo"></a>
          <a target="_blank" href="https://www.jetbrains.com/fr-fr/phpstorm/"><img id="phpstorm" class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/devicon-plain_phpstorm.png" alt="php storm logo"></a>
        </div>

        <div class="lg:flex md:gap-32 gap-10 lg:mx-0 mx-auto">
          <a target="_blank" href="https://www.figma.com/fr/"><img id="figma" class="md:w-24 w-16" src="/img/logos/solar_figma-bold-duotone.png" alt="figma logo"></a>
          <a target="_blank" href="https://www.notion.so/fr-fr"><img id="notion" class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/simple-icons_notion.png" alt="notion logo"></a>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>

<script>

import anime from "animejs";

export default {
  data() {
    return {
      logoVisible: true,
      colorCross : '#F0BF6C',
    };
  },
  methods: {
    toggleMenu() {
      this.colorCross = '#31333b'
      this.animateMenu("burger", "cross", 45, 0, 0.8, 1);
      document.body.style.overflow = 'hidden';
      document.body.style.background = '#F0BF6C';
      this.logoVisible = false
    },

    closeMenu() {
      this.colorCross = '#F0BF6C'
      this.animateMenu("cross", "burger", 45, 0, 1, 0.8);
      document.body.style.overflow = 'auto';
      document.body.style.background = '';
      this.logoVisible = true
    },

    animateMenu(hideTarget, showTarget, rotateStart, rotateEnd, scaleStart, scaleEnd) {
      const menu = document.querySelector("#menu");
      const hideBtn = document.querySelector(`#btn-navbar-${hideTarget}`);
      const showBtn = document.querySelector(`#btn-navbar-${showTarget}`);

      menu.classList.toggle("hidden");

      anime({
        targets: hideBtn,
        opacity: 0,
        scale: scaleStart,
        rotate: rotateStart,
        translateX: 10,
        duration: 300,
        easing: 'easeInOutQuad',
        complete: () => {
          hideBtn.classList.toggle("hidden");
          showBtn.classList.remove("hidden");

          anime({
            targets: showBtn,
            opacity: 1,
            scale: scaleEnd,
            rotate: rotateEnd,
            translateX: 0,
            duration: 300,
            easing: 'easeInOutQuad',
          });
        }
      });
    },
  }
}
</script>

<template>
  <div>
    <nav class="container">
      <div class="flex justify-between items-center h-20 sm:mx-0 mx-5">
        <div class="lg:hidden mt-3">
          <button id="btn-navbar-burger" class="ml-2 " @click="toggleMenu">
            <svg class="w-[36px] fill-current hover:text-white text-gold-200" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
              <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
          <button id="btn-navbar-cross" class="ml-2 hidden" @click="closeMenu">
            <svg :style="{color : colorCross}" class="w-[36px] hover:text-white fill-current svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/></svg>
          </button>
        </div>
        <a href="/" class="cursor-pointer sm:ml-0 ml-10" v-if="logoVisible">
          <img src="/img/logo-transparent.png" class="w-16" alt="logo_principal">
        </a>
        <div class="hidden lg:flex items-center space-x-4 lg:text-[19px] text-[16px] ">
          <a :class="{ 'active-link': $route.path === '/' }" href="/" class="text-gold-200 hover:text-white link-navbar">
            Présentation
          </a>
          <a :class="{ 'active-link': $route.path === '/prestation' }" href="/prestation" class="text-gold-200 hover:text-white link-navbar">
            Prestations
          </a>
          <a :class="{ 'active-link': $route.path === '/realisation' }" href="/realisation" class="text-gold-200 hover:text-white link-navbar">
            Réalisations
          </a>
<!--          <a :class="{ 'active-link': $route.path === '/competences' }" href="/competences" class="text-gold-200 hover:text-white link-navbar">-->
<!--            Compétences-->
<!--          </a>-->
        </div>

        <a id="contact" href="/contact" class="lg:text-[19px] text-[16px] border-2 border-black-200 text-black-200 font-bold rounded-lg p-2 bg-gold-200 hover:text-white">
          Contacter
        </a>
      </div>
      <div class="xl:flex hidden justify-end" >
        <div class="block mt-[-10px]" data-aos="fade-bottom" data-aos-duration="1500">
          <img class="w-12 r ml-8"  src="/img/icones-prestation/arrow.png" alt="Arrow Icon">
          <p class="text-[18px] text-gold-200 font-bold">N'hésitez pas</p>
        </div>
      </div>
    </nav>
    <div id="menu" class="hidden flex items-center justify-center container bg-gold-200 w-screen h-screen" >
      <div class="flex flex-col items-center space-y-24 justify-center">
        <button>
          <a :class="{ 'active-link': $route.path === '/' }" href="/" class="text-black-100 text-3xl font-semibold hover:text-white">Présentation
          </a>
        </button>
        <button>
          <a :class="{ 'active-link': $route.path === '/prestation' }" href="/prestation" class="text-black-100 text-3xl font-semibold hover:text-white">Prestations
          </a>
        </button>
        <button>
          <a :class="{ 'active-link': $route.path === '/realisation' }" href="/realisation" class="text-black-100 text-3xl font-semibold hover:text-white">Réalisations
          </a>
        </button>
        <button>
<!--          <a :class="{ 'active-link': $route.path === '/competences' }" href="/competences"  class="text-black-100 text-4xl font-semibold hover:text-white">Compétences-->
<!--          </a>-->
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>

.active-link{
  border-bottom: solid 2px;
}

@media (max-width: 1024px) {
  .active-link{
    border-bottom: solid 4px;
  }

}


</style>

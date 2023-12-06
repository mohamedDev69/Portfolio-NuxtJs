<script setup>

import Navbar from "@/components/Navbar.vue";
import CardRealisation from '@/components/CardRealisation.vue';



</script>

<template>

  <div>
  <Navbar />

  <div class="container mt-16 ">

    <h2 class="sm:text-3xl text-2xl text-gold-200 font-bold sm:text-left text-center"> Mes Réalisations </h2>

  <div class="flex mt-16 ml-6 " data-aos="fade-up" data-aos-duration="1000">

      <!-- Réalisation -->
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative,SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
        :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }
"
    >
      <SwiperSlide>
        <card-realisation
            type="Projet Professionel"
            img-src="/img/carousel-picture/crm-picture.jpg"
            img-alt="Image d'une CRM (Custom Relationship Manager)"
            href="#"
            target=""
            description="Durant mon alternance, je travaille sur l'amélioration d'une CRM..."
        ></card-realisation>
      </SwiperSlide>
      <SwiperSlide>
        <card-realisation
            type="Projet Scolaire"
            img-src="/img/carousel-picture/Frame%203.2.png"
            img-alt="Image pour les grands écrans"
            href="https://emmapierre.netlify.app/view/"
            target="_blank"
            description="Pour ce projet scolaire, j'ai collaboré à la création d'un site web..."
        ></card-realisation>
      </SwiperSlide>
      <SwiperSlide>
        <card-realisation
            type="Futur projet"
            img-src="/img/carousel-picture/prochainement.png"
            img-alt="Image avec le mot prochainement en son centre"
            href="#"
            target=""
            description=""
        ></card-realisation>
      </SwiperSlide>

    </Swiper>

    </div>


    <!--  Compétences -->

    <div class="sm:mt-32 mt-40 mb-32">
      <h2 class="sm:text-3xl text-2xl text-gold-200 font-bold sm:text-left text-center"> Mes Outils </h2>

      <div class="ml-6 sm:mt-16 mt-20">
        <h3 class="text-gold-200 font-bold sm:text-2xl text-xl lg:text-left text-center "> Développement Web</h3>
        <div class="flex lg:gap-20 gap-3 mt-12">

          <div class="lg:flex lg:gap-20 gap-10 lg:mx-0 mx-auto" data-aos="fade-left" data-aos-duration="2000">
            <img class="md:w-24 w-16" src="/img/logos/html.png" alt="html logo">
            <a target="_blank" href="https://tailwindcss.com/"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/tailwind.png" alt="tailwind logo"></a>
          </div>

          <div class="lg:flex md:gap-20 gap-10 lg:mx-0 mx-auto" data-aos="fade-right" data-aos-duration="2000">
            <a target="_blank" href="https://www.php.net/"><img class="md:w-24 w-16" src="/img/logos/php.png" alt="php logo"></a>
            <a target="_blank" href="https://laravel.com/"><img class="md:w-24 w-16 lg:mt-0 mt-10 " src="/img/logos/laravel.png" alt="laravel logo"></a>
          </div>

          <div class="lg:flex md:gap-20 gap-10 lg:mx-0 mx-auto"  data-aos="fade-left" data-aos-duration="2000" >
           <img class="md:w-24 w-16" src="/img/logos/javascript.png" alt="javascript logo">
           <a target="_blank" href="https://vuejs.org/"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/vuejs.png" alt="vuejs logo"></a>
          </div>


        </div>
      </div>

      <div class="ml-6 sm:mt-16 mt-20" >
        <h3 class="text-gold-200 font-bold sm:text-2xl text-xl  lg:text-left text-center"> Applications - Logiciels </h3>
        <div class="flex lg:gap-32 gap-5 mt-10" >

          <div class="lg:flex lg:gap-32 gap-10 lg:mx-0 mx-auto" data-aos="fade-left" data-aos-duration="2000">
            <a target="_blank" href="https://github.com/"><img class="md:w-24 w-16" src="/img/logos/mdi_github.png" alt="github logo"></a>
            <a target="_blank" href="https://www.jetbrains.com/fr-fr/phpstorm/"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/devicon-plain_phpstorm.png" alt="php storm logo"></a>
          </div>

          <div class="lg:flex md:gap-32 gap-10 lg:mx-0 mx-auto" data-aos="fade-right" data-aos-duration="2000">
            <a target="_blank" href="https://www.figma.com/fr/"><img class="md:w-24 w-16" src="/img/logos/solar_figma-bold-duotone.png" alt="figma logo"></a>
            <a target="_blank" href="https://www.notion.so/fr-fr"><img class="md:w-24 w-16 lg:mt-0 mt-10" src="/img/logos/simple-icons_notion.png" alt="notion logo"></a>
          </div>

        </div>
      </div>

    </div>
  </div>
  </div>

</template>

<style scoped>

</style>

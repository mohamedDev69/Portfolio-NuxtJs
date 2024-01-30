<script setup>

import BlocApparition from "~/components/BlocApparition.vue";

let title = "Réalisation"

let description = "Explorez mon portfolio de réalisations en développement web. Découvrez des projets variés illustrant mon expertise et ma créativité en tant que développeur freelance. Visitez pour vous inspirer et voir comment je peux transformer vos idées en réalité."

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})

import Navbar from "@/components/Navbar.vue";

import CardRealisation from "@/components/CardRealisation.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import anime from "animejs";
import { ref, onMounted, onUnmounted } from 'vue';

const pageCarousel = ref(2); // Définir la valeur par défaut de la variable

function updateItemsToShow() {
  if (window.innerWidth < 1280) { // Par exemple, pour les écrans inférieurs à 768px
    pageCarousel.value = 1;
  } else {
    pageCarousel.value = 2;
  }
}

function animateCarousel(){
  anime({
    targets: '.splide__slide',
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 250,
  });
}

onMounted(() => {
  animateCarousel()
  updateItemsToShow(); // Vérifier lors du montage du composant
  window.addEventListener('resize', updateItemsToShow); // Ajouter un écouteur d'événements de redimensionnement
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsToShow); // Nettoyer l'écouteur lors du démontage
});


</script>

<template>

  <div>
  <Navbar />

    <div class="container mt-16 ">


      <h2 class="sm:text-3xl text-2xl text-gold-200 font-bold sm:text-left text-center"> Mes Réalisations </h2>

      <div class=" flex justify-center mt-16 ml-6 ">

        <!-- Réalisation -->
        <Splide class="container" :options="{ speed : 1500, rewind: true,  perPage: pageCarousel , height : 700,gap: '4rem' }">
          <SplideSlide>
            <card-realisation class="xl:ml-16"
                type="Projet Professionel"
                img-src="/img/carousel-picture/crm-picture.jpg"
                img-alt="Image d'une CRM (Custom Relationship Manager) "
                href="#"
                target=""
                description="Durant mon alternance, je travaille sur l'amélioration d'une CRM, en me concentrant sur l'optimisation des performances, l'analyse des KPI, la comptabilité...
                Mon rôle consiste à intégrer un framework plus efficace et à développer de nouvelles fonctionnalités, améliorant ainsi l'efficacité de la CRM.
                Cette expérience enrichit mes compétences en programmation et en gestion de projet, tout en me fournissant une compréhension approfondie des besoins commerciaux et techniques en milieu professionnel."
            ></card-realisation>
          </SplideSlide>

          <SplideSlide>
          <card-realisation   class="xl:ml-10"
                              type="Projet Scolaire"
                              img-src="/img/carousel-picture/emma_pierre_mockup.png"
                              img-alt="Image pour les grands écrans"
                              href="https://emmapierre.netlify.app/view/"
                              target="_blank"
                              description="Pour ce projet scolaire,
                              j'ai collaboré à la création d'un site web pour une entreprise de création de bijoux.
                              Le design est moderne et élégant, la navigation est intuitive, et la présentation des produits est soignée.
                              Réalisé en HTML, CSS, JavaScript, et Tailwind pour assurer sa compatibilité sur différents appareils.
                              Une expérience enrichissante d'apprentissage et de travail d'équipe dans un contexte professionnel."
            >
            </card-realisation>
          </SplideSlide>

          <SplideSlide>
            <card-realisation class="xl:ml-16"
                              type="Futur projet"
                              img-src="/img/carousel-picture/prochainement.png"
                              img-alt="Image avec le mot prochainemen en son centre"
                              href="#"
                              target=""
                              description="Projet à venir">
            </card-realisation>
          </SplideSlide>

        </Splide>


      </div>

      <MesOutils />

    </div>
  </div>

</template>

<style>

.splide__arrow svg {
  fill: #31333b !important;

}

.splide__arrow {
  background-color: #f0bf6c;
}

</style>

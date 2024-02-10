<script setup>

import { onMounted } from 'vue';
import anime from "animejs";

function animateCard(){
  anime({
    targets: '.card-prestation',
    opacity: [0, 1],
    easing: 'easeInSine',
    duration: 1000,
  });
}

onMounted(() => {
  animateCard();
});


let title = "Prestation"

let description = "Découvrez les services de développement web que je propose en tant que développeur. De la conception à la réalisation, explorez mes offres de prestations adaptées à vos besoins pour donner vie à vos projets numériques."

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})

import Navbar from "@/components/Navbar.vue";
import CardPrestation from "@/components/CardPrestation.vue";

let listDesign = [
  {
    text: "Création d'un design moderne, attrayant et esthétiquement plaisant pour une présence en ligne professionnelle.",
    icon: "fas fa-palette",
  },
  {
    text : "Conception de maquettes axées sur l'alignement avec les objectifs de marque et l'engagement des utilisateurs.",
    icon : "fas fa-pen-to-square",
  },
  {
    text : "Processus de feedback itératif assurant que les designs finaux correspondent aux attentes des clients. ",
    icon : "fas fa-comments",
  }
]

let listDeveloppementWeb = [
  {
    text: "Développement personnalisé de sites web et d\'applications web responsive, répondant à vos besoins spécifiques.",
    icon: "fas fa-desktop",
    icon2 : "fas fa-mobile-screen"
  },
  {
    text : "Optimisation de la performance et de la vitesse pour une expérience utilisateur fluide et réactive.",
    icon : "fas fa-tachometer-alt",
  },
  {
    text : "SEO amélioré : Des stratégies avancées pour augmenter votre visibilité en ligne. ",
    icon : "fas fa-search",
  }
]

let listMaintenance = [
  {
    text: "Forfaits de maintenance personnalisables incluant surveillance des performances et sauvegardes régulières.",
    icon: "fas fa-tools",
  },
  {
    text : "Services de refonte de sites web pour modernisation esthétique et fonctionnelle." +
        "                      ",
    icon : "fas fa-sync-alt",
  },
  {
    text : "Gestion de l\'hébergement de votre site ou application web pour une disponibilité et performance optimales en ligne.",
    icon : "fas fa-server",
  }
]

</script>

<template>
  <div>
  <Navbar/>
  <div class="container card-prestation opacity-0">

    <div id="prestations" class="2xl:mt-20 xl:mt-4 lg:mt-10 sm:mt-24 mt-16 xl:pb-2 pb-10 flex justify-center lg:items-stretch items-center gap-10 lg:flex-row flex-col">

      <!----------------------------------------------------------- Maquettage Design --------------------------------------------->

      <div class="rounded overflow-hidden border-black-200 bg-black-200 border-2 2xl:w-[430px] xl:w-[500px] w-[350px] ">

        <CardPrestation img-src="img/icones-prestation/web-design.png" title="Maquettage Design" :list-items="listDesign" img-alt="ecran design">
        </CardPrestation>

      </div>
      <!----------------------------------------------------------- Création de site Web / App web --------------------------------------------->

      <div class="rounded overflow-hidden border-black-200 bg-black-200 border-2 2xl:w-[430px] xl:w-[500px] w-[350px] ">

        <CardPrestation img-src="img/icones-prestation/picture_website.png"
                        title="Développement Web"
                        :list-items="listDeveloppementWeb"
                        img-alt="photo de développement">
        </CardPrestation>

      </div>


      <!----------------------------------------------------------- Maintenance / Refonte --------------------------------------------->

      <div
           class="rounded overflow-hidden border-black-200 bg-black-200 border-2 2xl:w-[430px] xl:w-[500px] w-[350px] ">

        <CardPrestation img-src="img/icones-prestation/optimize.png"
                        title="Maintenance / Refonte"
                        :list-items="listMaintenance"
                        img-alt="photo de maintenance/refonte">
        </CardPrestation>

      </div>

    </div>
  </div>
  </div>
</template>

<style scoped>

</style>

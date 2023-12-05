<script setup>

import Navbar from "@/components/Navbar.vue";
import CardPrestation from "@/components/CardPrestation.vue";

let listDesign = [
  {
    text: "Création d'un design moderne, attrayant et esthétiquement plaisant pour une présence en ligne professionnelle.",
    icon: "fa-solid fa-palette",
  },
  {
    text : "Conception de maquettes axées sur l'alignement avec les objectifs de marque et l'engagement des utilisateurs.",
    icon : "fa-solid fa-pen-to-square",
  },
  {
    text : "Processus de feedback itératif assurant que les designs finaux correspondent aux attentes des clients. ",
    icon : "fa-solid fa-comments",
  }
]

let listDeveloppementWeb = [
  {
    text: "Développement personnalisé de sites web et d\'applications web responsive, répondant à vos besoins spécifiques.",
    icon: "fa-solid fa-desktop",
    icon2 : "fa-solid fa-mobile-screen"
  },
  {
    text : "Optimisation de la performance et de la vitesse pour une expérience utilisateur fluide et réactive.",
    icon : "fa-solid fa-tachometer-alt",
  },
  {
    text : "SEO amélioré : Des stratégies avancées pour augmenter votre visibilité en ligne. ",
    icon : "fa-solid fa-search",
  }
]

let listMaintenance = [
  {
    text: "Forfaits de maintenance personnalisables incluant surveillance des performances et sauvegardes régulières.",
    icon: "fa-solid fa-tools",
  },
  {
    text : "Services de refonte de sites web pour modernisation esthétique et fonctionnelle." +
        "                      ",
    icon : "fa-solid fa-sync-alt",
  },
  {
    text : "Gestion de l\'hébergement de votre site ou application web pour une disponibilité et performance optimales en ligne.",
    icon : "fa-solid fa-server",
  }
]

</script>

<template>
  <div>
  <Navbar/>
  <div class="container">

    <div id="prestations" class="2xl:mt-20 xl:mt-6 lg:mt-10 sm:mt-24 mt-16 xl:mb-0 mb-10 flex justify-center lg:items-stretch items-center gap-10 lg:flex-row flex-col">

      <!----------------------------------------------------------- Maquettage Design --------------------------------------------->

      <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1000"
           class="cursor-pointer rounded overflow-hidden border-black-200 bg-black-200 border-2 2xl:w-[430px] xl:w-[500px] w-[350px] ">

        <CardPrestation img-src="img/icones-prestation/web-design.png" title="Maquettage Design" :list-items="listDesign" img-alt="ecran design">
        </CardPrestation>

      </div>
      <!----------------------------------------------------------- Création de site Web / App web --------------------------------------------->

      <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1500"
           class="rounded overflow-hidden border-black-200 bg-black-200 border-2 2xl:w-[430px] xl:w-[500px] w-[350px] ">

        <CardPrestation img-src="img/icones-prestation/picture_website.png"
                        title="Développement Web"
                        :list-items="listDeveloppementWeb"
                        img-alt="photo de développement">
        </CardPrestation>

      </div>


      <!----------------------------------------------------------- Maintenance / Refonte --------------------------------------------->

      <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-duration="1500"
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

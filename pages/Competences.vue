<script setup>

import Navbar from "@/components/Navbar.vue";
import cardCompetence from "@/components/CardCompetence.vue";

</script>

<template>
  <div>
  <Navbar />

  <div class="container ">

    <h1 class="text-gold-200 text-2xl font-bold mb-24 mt-12 ">Languages de Programmation</h1>

    <card-competence title="PHP"
                     description="dfsdfsqdf"
                     img-alt="logo php"
                     img-src="img/icones-prestation/web-design.png">
    </card-competence>


  </div>
  </div>

</template>

<style scoped>

</style>

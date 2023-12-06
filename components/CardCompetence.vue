<script setup>

const props = defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="bg-black-100 w-[400px] block rounded-xl">
    <img :src="props.imgSrc" :alt="props.imgAlt" />
    <h4 v-html="props.title"></h4>
    <p v-html="props.description"></p>
  </div>
</template>

<style scoped>

</style>

<script setup>

import { defineProps } from 'vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps( {
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
    listItems: {
      type: Array,
      required: true
    }
})
</script>

<template>
   <div class="2xl:p-14 p-10 flex flex-col items-center">
      <img class="2xl:w-[100px] xl:w-[90px] md:w-[80px] w-24 mb-10" :src="props.imgSrc" :alt="props.imgAlt">
      <h3 class="text-gold-200 font-bold 2xl:text-xl xl:text-[18px] md:text-[16px] mb-10 text-center md:block" v-html="props.title"></h3>
      <ul class="text-white 2xl:text-[14px] xl:text-[13px] md:text-[12px] text-sm list-disc space-y-12 leading-normal">
        <li v-for="item in props.listItems" :key="item">
          <font-awesome-icon :icon="item.icon" class="text-[17px] mx-1 text-gold-200" />
          <font-awesome-icon :icon="item.icon2" class="text-[17px] mx-1 text-gold-200" />
          {{ item.text }}
        </li>
      </ul>
    </div>
</template>

<style scoped>

</style>


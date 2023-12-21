<script setup>

const props = defineProps ({
    imgSrc: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
})
</script>

<template>
  <div class="flex flex-col xl:items-start items-center xl:justify-start justify-center">
    <h3 class="font-bold text-gold-200 lg:text-2xl text-xl">Type : {{ props.type }} </h3>
    <div class="mt-6">
      <div class="overflow-hidden aspect-w-16 aspect-h-9 ">
        <a :target="props.target" :href="props.href">
          <img :src="imgSrc" :alt="props.imgAlt" class="2xl:w-[350px] md:w-[280px] w-[200px] rounded-lg hover:rounded-lg transition ease-in-out hover:scale-110 duration-700" >
        </a>
      </div>
    </div>
    <div class="mt-16">
      <h4 class="font-bold text-gold-200 lg:text-xl sm:text-[18px] text-[16px] xl:text-left text-center">Description : </h4>
      <p class="text-white md:px-0 sm:px-12 px-14 text-center sm:mt-6 mt-10 leading-7 w-[450px] xl:text-left md:text-[14px] text-[12px]" v-html="props.description"></p>
    </div>
  </div>
</template>

<style scoped>

</style>
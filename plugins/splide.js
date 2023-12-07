import { defineNuxtPlugin } from 'nuxt/app';
import Splide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Splide);
});
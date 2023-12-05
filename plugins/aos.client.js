// plugins/aos.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('aos', {
        mounted(el) {
            AOS.init(); // Assurez-vous que cette initialisation est correcte
        },
    });
});

<template>
  <div>
    <NuxtPage />
  </div>
</template>


<script setup>
import { useHead } from '@vueuse/head';


useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-0PT349TFG7',
      async: true
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-0PT349TFG7');
      `,
      type: 'text/javascript'
    }
  ]
});
</script>

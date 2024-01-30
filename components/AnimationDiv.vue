<template>
  <div ref="animatedElement" class="animate-on-scroll">
    <!-- Contenu que vous souhaitez animer -->
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import anime from 'animejs';

const animatedElement = ref(null);

// Cette fonction vérifie si l'élément est dans la fenêtre d'affichage et l'anime.
const checkScroll = () => {
  if (animatedElement.value) {
    const position = animatedElement.value.getBoundingClientRect();
    // Assurez-vous que l'animation ne se joue que si l'élément est visible à l'écran.
    if (position.top < window.innerHeight && position.bottom >= 0) {
      anime({
        targets: animatedElement.value,
        opacity: 1,
        easing: 'easeOutElastic',
        duration: 1000
      });
    }
  }
};

// Ajoutez un écouteur d'événement pour le défilement lors du montage du composant
onMounted(() => {
  if (process.client) {  // S'assurer que le code s'exécute côté client
    window.addEventListener('scroll', checkScroll);
    checkScroll();  // Vérifier immédiatement si l'élément est déjà visible
  }
});

// N'oubliez pas de retirer l'écouteur d'événement lorsque le composant est détruit
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', checkScroll);
  }
});
</script>

<style>
.animate-on-scroll {
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}
</style>
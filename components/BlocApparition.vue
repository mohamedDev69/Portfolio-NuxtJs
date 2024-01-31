<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';

// Props
const width = ref('fit-content');

// Data
const isContentVisible = ref(false);

// Refs for DOM elements
const revealContainer = ref(null);
const revealContent = ref(null);
const revealMask = ref(null);

// Methods
const revealAnimation = () => {
  anime({
    targets: revealContent.value,
    opacity: [0, 1],
    translateY: [75, 0],
    easing: 'easeOutQuad',
    duration: 1000,
    delay: 250,
  });
  anime({
    targets: revealMask.value,
    translateX: ['0%', '100%'],
    easing: 'easeInQuad',
    duration: 1000,
  });
};

// Mounted lifecycle hook
onMounted(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isContentVisible.value) {
          revealAnimation();
          isContentVisible.value = true;
        }
      },
      { threshold: 0.40 } // Trigger when 40% of the element is in view
  );

  observer.observe(revealContainer.value);
});
</script>


<template>
  <div ref="revealContainer" class="reveal-container" :style="{ width: width, overflow: 'hidden' }">
    <div :ref="'revealContent'">
      <slot></slot> <!-- Default slot for child content -->
    </div>
    <div ref="revealMask" class="reveal-mask"></div>
  </div>
</template>

<style scoped>
.reveal-container {
  position: relative;
}

.reveal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F0BF6C;
  z-index: 1;
}
</style>

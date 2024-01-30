
<script>
import anime from 'animejs';
export default {
  props: {
    width: {
      type: String,
      default: 'fit-content',
    },
  },
  data() {
    return {
      isContentVisible: false,
    };
  },
  mounted() {
    // Observing the element to decide when to trigger the animation
    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.isContentVisible) {
            this.revealAnimation();
            this.isContentVisible = true; // Make sure the animation runs only once
          }
        },
        { threshold: 0.25 } // Trigger when 25% of the element is in view
    );

    observer.observe(this.$refs.revealContainer);
  },
  methods: {
    revealAnimation() {

      anime({
        targets: this.$refs.revealContent,
        opacity: [0, 1],
        translateY: [75, 0],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: 250,
      });
      console.log(this.$refs.revealMask)
      anime({
        targets: this.$refs.revealMask,
        translateX: ['0%', '100%'],
        easing: 'easeInQuad',
        duration: 1000,
      });
    },
  },
};
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

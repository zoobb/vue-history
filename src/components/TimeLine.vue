<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.to('.year', {
    x: 100,
    duration: 6,
    stagger: 0.6,
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
    },
  });
});
</script>

<template>
  <div class="timeline">
    <div class="timeline-body">
      <div class="year">
        1
      </div>
      <div class="year">
        2
      </div>
      <div class="year">
        3
      </div>
      <div class="year">
        4
      </div>
      <div class="year">
        5
      </div>
      <div class="year">
        6
      </div>
      <div class="year">
        7
      </div>
      <div class="year">
        8
      </div>
      <div class="year">
        9
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  border: 1px solid black;
}

.timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  position: relative;
}

.timeline-body {
  display: flex;
  gap: 1rem;
  position: absolute;
  left: 50%;
}

.year {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 3rem;
  border-radius: 0.4rem;
  flex: 0 0 auto;
}
</style>

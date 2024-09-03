<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps<{
  header: string,
}>();

const accordion = ref<HTMLElement | null>(null);
const panel = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const toggleAccordion = () => {
  isOpen.value = !isOpen.value;

  gsap.to(panel.value, {
    height: isOpen.value ? 'auto' : 0,
    duration: 0.5,
    ease: 'power3.inOut',
  });
};

onMounted(() => {
  gsap.set('.panel', { height: 0 });
});
</script>

<template>
  <div>
    <button
      ref="accordion"
      class="accordion"
      @click="toggleAccordion"
    >
      <h1>{{ props.header }}</h1>
    </button>
    <div
      ref="panel"
      class="panel"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion {
  width: 100%;
}
.panel {
  width: 100%;
  overflow: hidden;
}
</style>

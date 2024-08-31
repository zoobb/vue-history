<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  header: string,
  contentList: string[],
}>();

const accordion = ref<HTMLElement | null>(null);
const panel = ref<HTMLElement | null>(null);
const isOpen = ref(false);
/* const toggleAccordion = () => {
  if (panel.value.style.display === 'none') panel.value.style.display = 'block';
  else panel.value.style.display = 'none';
}; */
const toggleAccordion = () => { isOpen.value = !isOpen.value; };
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
      v-show="isOpen"
      ref="panel"
      class="panel"
    >
      <ol>
        <li
          v-for="(element, index) in props.contentList"
          :key="index"
        >
          {{ element }}
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion {

}
.panel {
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}
</style>

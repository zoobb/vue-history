<script setup lang="ts">
import { ref } from 'vue';
import tenthClassContent from '../text_content/10th_class.json';
import Accordion from '../components/Accordion.vue';

const content = ref(tenthClassContent);
</script>

<template>
  <accordion
    v-for="(item, index) in content.content"
    :key="index"
    :header="item.header"
  >
    <ol>
      <li
        v-for="(listElement, index2) in item.list"
        :key="index2"
      >
        {{ listElement }}
      </li>
    </ol>
  </accordion>
</template>

<style scoped lang="scss">

</style>

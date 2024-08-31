<script setup lang="ts">

import { ref } from 'vue';
import Accordion from '../components/Accordion.vue';
import fifthClassContent from '../text_content/fifth_class.json';

const content = ref(fifthClassContent);
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

<script setup lang="ts">
const props = defineProps<{
  header: string,
  content: string[],
}>();
</script>

<template>
  <h1>{{ props.header }}</h1>
  <ol>
    <li
      v-for="(element, index) in props.content"
      :key="index"
    >
      {{ element }}
    </li>
  </ol>
</template>

<style scoped lang="scss">

</style>

<script setup lang="ts">
const props = defineProps<{
  banner: string;
}>();
</script>

<template>
  <img
    :src="props.banner"
    alt="banner"
  >
</template>

<style scoped lang="scss">
  img {
    width: 100%;
  }
</style>

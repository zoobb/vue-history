<script setup lang="ts">
defineProps<{
  banner: string;
}>();
</script>

<template>
  <img
    :src="$props.banner"
    alt="banner"
  >
</template>

<style scoped lang="scss">

</style>

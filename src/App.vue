<script setup lang="ts">

import HeaderBlock from './components/HeaderBlock.vue';
import BannerBlock from './components/BannerBlock.vue';

</script>

<template>
  <header-block />
  <banner-block :banner="$route.meta.banner" />
  <router-view />
</template>

<style lang="scss">
* {
  /*border: 1px solid black;*/
}

:root {
  background-color: #f1efee;
  color: #434343;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

button, input[type="submit"], input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: unset;
  outline: inherit;
}

body {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: inherit;
  /*all: unset;*/
}

</style>

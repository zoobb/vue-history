<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="logo">
      <span>История</span>
    </div>
    <div class="nav">
      <router-link to="/fifth_class">
        <button>5 класс</button>
      </router-link>
      <button>9 класс</button>
      <button>10 класс</button>
      <button>11 класс</button>
      <button>12 класс</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 4rem;
  width: 100%;
  background-color: #f1efee;
  position: fixed;
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
}

button {
  background: none;
  height: 2rem;
  width: 4rem;
}
</style>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
</script>

<template>
  <toolbar>
    <template #start>
      <span>История</span>
    </template>
    <template #end>
      <router-link to="/">
        <Button
          label="Главная страница"
          text
        />
      </router-link>
      <Button
        label="Введение в изучение истории древнего мира"
        text
      />
      <router-link to="/fifth_class">
        <Button
          label="5 Класс"
          text
        />
      </router-link>
      <Button
        label="10 Класс"
        text
      />
      <Button
        label="11 Класс"
        text
      />
      <Button
        label="12 Класс"
        text
      />
    </template>
  </toolbar>
</template>

<style scoped lang="scss">
/*.header {
  height: 4rem;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.5);
}*/
</style>

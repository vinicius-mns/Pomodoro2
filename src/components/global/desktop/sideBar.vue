<script setup lang="ts">
import navBar from './navBar.vue';
</script>

<template>
  <aside>
    <navBar />
  </aside>
</template>

<style scoped lang="scss">
// desktop
@media screen and (min-width: 1024px) {
  aside {
    height: 100vh;
    width: 16%;
    display: flex;
    flex-direction: column;
    background-color: rgb(45, 45, 45);
  }
}
</style>
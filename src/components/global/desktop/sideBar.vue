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
  width: 26%;
  height: 100vh;
  background-color: red;
}
</style>
<script setup lang="ts">
import FormNavigationComponent from '../components/FormNavigationComponent.vue'
</script>

<template>
  <main class="d-flex flex-column w-100 h-100 fixed-top background">
    <FormNavigationComponent />
  </main>
</template>

<style scoped>
.background {
  background-image: url('../assets/blue-background.jpeg');
}
</style>

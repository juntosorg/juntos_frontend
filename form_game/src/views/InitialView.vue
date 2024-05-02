<script setup lang="ts">
import InitialComponent from '@/components/InitialComponent.vue';

</script>

<template>
  <main class="d-flex flex-col back-styled">
    <InitialComponent />
  </main>
</template>

<style scoped>
  .back-styled {
    background-color: #fff; 
    width: 100%; 
    height: 100%;
    overflow: hidden;
  }
</style>
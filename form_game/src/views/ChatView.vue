<script setup lang="ts">
import { ref } from 'vue';
import FinalChatAIComponent from '../components/CFinal/FinalChatAIComponent.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = ref(route.query.userId)

</script>

<template>
  <main class="d-flex flex-col back-styled">
    <FinalChatAIComponent :userId="userId"/>
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
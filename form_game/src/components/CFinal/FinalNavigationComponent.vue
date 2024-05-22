<script setup lang="ts">
import { ref } from 'vue';
import FinalFormComponent from './FinalFormComponent.vue';
import FinalChatAIComponent from './FinalChatAIComponent.vue';

const currentComponent = ref('FinalFormComponent');

function goToChatComponent() {
    currentComponent.value = 'FinalChatAIComponent';
}
</script>

<template>
  <div class="container-fluid">
    <div v-if="currentComponent === 'FinalFormComponent'">
      <FinalFormComponent @switch="goToChatComponent" />
    </div>
    <div v-else-if="currentComponent === 'FinalChatAIComponent'">
      <FinalChatAIComponent />
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>

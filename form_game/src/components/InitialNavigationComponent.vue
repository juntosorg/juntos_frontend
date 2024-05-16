<script setup lang="ts">
import { ref } from 'vue'
import InitialAgeComponent from './InitialAgeComponent.vue'
import InitialComponent from './InitialComponent.vue'

const currentComponent = ref('FormAgeComponent')
const userId = ref('')

function goToInitialComponent(id: string) {
    userId.value = id
    currentComponent.value = 'InitialComponent'
}
</script>

<template>
    <div class="container-fluid">
        <div v-if="currentComponent === 'FormAgeComponent'">
            <InitialAgeComponent @continue="goToInitialComponent" />
        </div>
        <div v-else-if="currentComponent === 'InitialComponent'">
            <InitialComponent :userId="userId" />
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
  min-height: 100vh; 
}
</style>

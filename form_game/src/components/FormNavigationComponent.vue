<script setup lang="ts">
import { ref, computed } from 'vue'
import FormComponent from './FormComponent.vue'
import ProgressBarComponent from './ProgressBarComponent.vue'
import formData from '../assets/questions.json'
import FormHeaderComponent from './FormHeaderComponent.vue';

const totalItems = ref(formData.length)
const currForm = ref(0)
const updateCurrForm = () => currForm.value++
const decrementCurrForm = () => {
  if (currForm.value > 0) currForm.value--;
};
const isComplete = computed(() => currForm.value >= totalItems.value)
</script>

<template>
  <div class="container-fluid">
    <div v-if="!isComplete">
      <FormHeaderComponent @goBackQuestion="decrementCurrForm"/>
      <FormComponent
        :question="formData[currForm].question"
        :answers="formData[currForm].answers"
        @next-question="updateCurrForm"
      />
      <ProgressBarComponent :totalItems="totalItems" :answeredItems="currForm" />
    </div>
    <div v-else class="complete-message container text-center mt-5">
      <h1 class="fw-bold">Parabéns, questionário concluído!</h1>
    </div>
  </div>
</template>
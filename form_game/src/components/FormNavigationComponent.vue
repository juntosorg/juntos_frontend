<script setup lang="ts">
import { ref, computed } from 'vue'
import FormComponent from './FormComponent.vue'
import FormProgressBarComponent from './FormProgressBarComponent.vue'
import formData from '../assets/questions.json'
import FormHeaderComponent from './FormHeaderComponent.vue';

const totalItems = ref(formData.length)
const currForm = ref(0)
const selectedAnswers = ref(Array(formData.length).fill(-1));
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
        :selectedAnswerIndex="selectedAnswers[currForm]"
        @next-question="updateCurrForm"
        @answerSelected="answer => selectedAnswers[currForm] = answer"
      />
      <FormProgressBarComponent :totalItems="totalItems" :answeredItems="currForm" style="padding-bottom: 5%;" />
    </div>
    <div v-else class="complete-message container text-center mt-5">
      <h1 class="fw-bold">Parabéns, questionário concluído!</h1>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}


@media (max-width: 768px) {
  .container-fluid {
    padding: 10px;
  }
}
</style>
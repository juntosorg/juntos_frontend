<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import confetti from 'canvas-confetti';
import FormComponent from './FormComponent.vue'
import FormProgressBarComponent from './FormProgressBarComponent.vue'
import formData from '../assets/questions.json'
import FormHeaderComponent from './FormHeaderComponent.vue';
import FormAwardComponent from './FormAwardComponent.vue'

const totalItems = ref(formData.length)
const currForm = ref(0)
const selectedAnswers = ref(Array(formData.length).fill(-1));
const showAwardPopup = ref(false)

const updateCurrForm = () => {
  const answeredCount = selectedAnswers.value.filter(answer => answer !== -1).length;
  if (answeredCount > 0 && answeredCount % 5 === 0) {
    showAwardPopup.value = true;
  } else {
    showAwardPopup.value = false;
    currForm.value++;
  }
}

const decrementCurrForm = () => {
  if (currForm.value > 0) currForm.value--;
}

const launchConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

const isComplete = computed(() => currForm.value >= totalItems.value)
const closeAwardPopup = () => {
  showAwardPopup.value = false;
  currForm.value++;
}

watch(isComplete, (newVal) => {
  if (newVal) {
    launchConfetti();
  }
});
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
      <FormAwardComponent v-if="showAwardPopup" @close="closeAwardPopup" />
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
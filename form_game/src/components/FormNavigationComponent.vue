<script setup lang="ts">
import { ref, computed } from 'vue'
import FormComponent from './FormComponent.vue'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue'
const formData = [
  {
    question: 'Como você avaliaria sua qualidade de vida?',
    answers: ['Muito ruim', 'Ruim', 'Nem ruim nem boa', 'Boa', 'Muito boa']
  },
  {
    question: 'Quão satisfeito(a) você está com a sua saúde?',
    answers: [
      'Muito insatisfeito',
      'Insatisfeito',
      'Nem satisfeito nem insatisfeito',
      'Satisfeito',
      'Muito satisfeito'
    ]
  },
  {
    question:
      'Em que medida você acha que sua dor (física) impede você de fazer o que você precisa?',
    answers: ['Nada', 'Muito pouco', 'Mais ou menos', 'Bastante', 'Extremamente']
  }
]
const totalItems = ref(formData.length)
const currForm = ref(0)
const updateCurrForm = () => {
  currForm.value++
}
// Verifica se todos os formularios foram respondidos
const isComplete = computed(() => currForm.value >= totalItems.value)
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <ProgressBarComponent :totalItems="totalItems" :answeredItems="currForm" />
    <div v-if="!isComplete">
      <FormComponent
        :question="formData[currForm].question"
        :answers="formData[currForm].answers"
        :on-next="updateCurrForm"
      />
    </div>
    <div v-else class="complete-message container text-center mt-5">
      <h1 class="fw-bold">Parabéns, questionário concluído!</h1>
    </div>
  </div>
</template>
<style scoped></style>

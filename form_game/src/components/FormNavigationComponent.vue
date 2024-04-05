<script setup lang="ts">
import { ref } from 'vue'
import FormComponent from './FormComponent.vue'
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
</script>

<template>
  <div class="container p-5 m-5">
    <FormComponent
      :question="formData[currForm].question"
      :answers="formData[currForm].answers"
      :on-next="updateCurrForm"
    />
  </div>
</template>
<style scoped></style>

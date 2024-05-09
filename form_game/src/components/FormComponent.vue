<script setup lang="ts">

import {  ref } from 'vue'
const selectedAnswer = ref(-1)
const disabled = ref(true)
const isLoading = ref(false)

const { question, answers, selectedAnswerIndex } = defineProps<{
  question: string
  answers: string[]
  selectedAnswerIndex: number
}>()
const emits = defineEmits(['answerSelected', 'nextQuestion'])

const selectAnswer = (index: number) => {
  selectedAnswer.value = index
  emits('answerSelected', index)
  disabled.value = false
}

const nextQuestion = async () => {
  isLoading.value = true;
  selectedAnswer.value = -1  
  disabled.value = true       
  emits('nextQuestion')
  await new Promise(resolve => setTimeout(resolve, 2000));
  isLoading.value = false;
}

</script>

<template>
  <div class="container-form">
      <h1 class="lead fw-bold mb-5 text-dark text-center">{{ question }}</h1>
      <div class="row d-flex justify-content-between mb-5">
        <button v-for="(answer, index) in answers" :key="index" 
                class="btn answer-button shadow-button" :class="{ 'active': index === selectedAnswerIndex }"
                @click="selectAnswer(index)">
          {{ answer }}
        </button>
      </div>
      <div class="row">
        <div class="col text-center mt-5">
          <button class="btn green-button" :disabled="disabled || isLoading" @click="nextQuestion">Próxima questão</button>
        </div>
      </div>
  </div>
</template>

<style scoped>
.container-form{
  position: relative;
  padding: 5%;
  padding-bottom: 0%;
}

.answer-button {
  margin: 0 16px;
  flex: 1;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  padding: 16px;
  border-radius: 16px;
  transition: background-color 0.3s, color 0.3s;
}

.answer-button:hover {
  background-color: #f8f8f8;
}

.answer-button.active {
  background-color: #4caf50;
  color: white;
}

.green-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 24px 16px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
}
.green-button:hover {
  background-color: #45a049;
}
.shadow-button {
  box-shadow: 0px 2px 4px 0px #00000040;
}
</style>

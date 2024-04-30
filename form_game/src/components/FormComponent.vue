<script setup lang="ts">
import { ref } from 'vue'
const selectedAnswer = ref(-1)
const disabled = ref(true)

defineProps<{
  question: String
  answers: String[]
  selectedAnswerIndex: Number
}>()
const emits = defineEmits(['answerSelected', 'nextQuestion'])

const selectAnswer = (index: number) => {
  selectedAnswer.value = index
  emits('answerSelected', index)
  disabled.value = false
}

const nextQuestion = () => {
  selectedAnswer.value = -1  
  disabled.value = true       
  emits('nextQuestion')
}

</script>

<template>
  <div
    class="container border mt-5 p-5 rounded-3 shadow"
    style="background-color: white;"
  >
    <h1 class="lead fw-bold mb-5 text-dark text-center">{{ question }}</h1>
    <div class="row d-flex justify-content-between">
      <button v-for="(answer, index) in answers" :key="index" 
              class="btn answer-button shadow-button" :class="{ 'active': index === selectedAnswerIndex }"
              @click="selectAnswer(index)">
        {{ answer }}
      </button>
    </div>
    <div class="row">
      <div class="col text-center mt-5">
        <button class="btn green-button" :disabled="disabled" @click="nextQuestion">Próxima questão</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

@media (max-width: 770px) {
  .row.d-flex {
    flex-direction: column;
  }
  .answer-button {
    margin: 8px 0;
    flex: none;
  }
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
.shadow {
  box-shadow: 2px 2px 2px black;
}

.shadow-button{
  box-shadow: 0px 2px 4px 0px #00000040;
}
</style>

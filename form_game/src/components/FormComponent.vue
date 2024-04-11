<script setup lang="ts">
import { ref } from 'vue'
const disabled = ref(true)
defineProps<{
  question: String
  answers: String[]
  onNext: ((payload: MouseEvent) => void) | undefined
}>()
const emits = defineEmits(['answerSelected'])

const selectAnswer = (index: number) => {
  emits('answerSelected', index)
  disabled.value = false
  // enableOnNext.value = 1
}
</script>

<template>
  <div
    class="container border mt-5 p-5 rounded-3 shadow"
    style="background-color: white;"
  >
    <h1 class="lead fw-bold mb-5 text-dark">{{ question }}</h1>
    <div class="row">
      <div v-for="(answer, index) in answers" :key="index">
        <label class="lead text-dark">
          <input type="radio" :value="index" name="radio" @change="selectAnswer(index)" />
          {{ answer }}
        </label>
      </div>
    </div>
    <div class="row">
      <div class="text-end">
        <button class="btn green-button" :disabled="disabled" v-on:click="onNext">Próximo</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid black;
  cursor: pointer;
}
input[type="radio"]:checked {
  background-color: #4caf50;
  border-color: black;
}
.green-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
.green-button:hover {
  background-color: #45a049;
}
.shadow {
  box-shadow: 2px 2px 2px black;
}
.juntos-logo {
  width: 15%;
  height: 15%;
}
.button {
  background-color: blue;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(0, 0, 186);
}
</style>

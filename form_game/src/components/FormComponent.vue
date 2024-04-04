<script setup lang="ts">
defineProps<{
  question: String
  answers: String[]
  onNext: ((payload: MouseEvent) => void) | undefined
}>()
const emits = defineEmits(['answerSelected'])

const selectAnswer = (index: number) => {
  emits('answerSelected', index)
}
</script>

<template>
  <div class="container-fluid bg-dark border m-5 p-5 rounded-3 text-left" style="margin: auto">
    <h1 class="lead fw-bold mb-5 text-light">{{ question }}</h1>
    <div v-for="(answer, index) in answers" :key="index">
      <label class="lead text-light">
        <input type="radio" :value="index" name="radio" @change="selectAnswer(index)" />
        {{ answer }}
      </label>
    </div>
    <div class="text-end">
      <button class="btn btn-primary mt-5" v-on:click="onNext">Próximo</button>
    </div>
  </div>
</template>

<script></script>

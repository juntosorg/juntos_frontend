<script setup lang="ts">
import { ref, computed } from 'vue'
import FormComponent from './FormComponent.vue'
import ProgressBarComponent from '@/components/ProgressBarComponent.vue'
import formData from '../assets/questions.json'
const totalItems = ref(formData.length)
const currForm = ref(0)
const updateCurrForm = () => currForm.value++
const isComplete = computed(() => currForm.value >= totalItems.value)
</script>

<template>
  <div class="container-fluid">
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
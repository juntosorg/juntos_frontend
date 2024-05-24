<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import FormComponent from './FormComponent.vue'
import FormProgressBarComponent from './FormProgressBarComponent.vue'
import formData from '../../assets/questions.json'
import premios from '../../assets/premios.json'
import FormHeaderComponent from './FormHeaderComponent.vue'
import FormAwardComponent from './FormAwardComponent.vue'
import PresenteComponent from './FormPresenteComponent.vue'
import axios from 'axios'
import FinalFormComponent from '../CFinal/FinalFormComponent.vue'

const totalItems = ref(formData.length)
const currForm = ref(0)
const selectedAnswers = ref(Array(formData.length).fill(-1))
const showAwardPopup = ref(false)
const showPresente = ref(false)
const awardsShown = ref(Array(Math.ceil(formData.length / 5)).fill(false))

const presentTitle = ref('')
const presentContent = ref('')

const handleAward = (type: string) => {
  const awards = premios.filter((award) => award.tipo === type)
  const randomAward = awards[Math.floor(Math.random() * awards.length)]
  presentTitle.value = randomAward.titulo
  presentContent.value = randomAward.conteudo
  showAwardPopup.value = false
  showPresente.value = true
}

const handleClosePresente = async () => {
  showPresente.value = false
  currForm.value++
  await startQuestion()
}

const { userId } = defineProps<{
  userId: string
}>()

// const API = import.meta.env.VITE_API_URL
const API = 'https://5efa99a1-9b03-462b-8a83-5e04136e01fb-00-j7n4fy74wrpw.spock.replit.dev'

const updateCurrForm = async () => {
  if (currForm.value === totalItems.value - 1) {
    await endQuestion()
    currForm.value++
  } else {
    const answeredCount = selectedAnswers.value.filter((answer) => answer !== -1).length
    const awardIndex = Math.floor(answeredCount / 5)
    if (answeredCount > 0 && answeredCount % 5 === 0 && !awardsShown.value[awardIndex]) {
      await endQuestion()
      showAwardPopup.value = true
      awardsShown.value[awardIndex] = true
    } else {
      await endQuestion()
      currForm.value++
      await startQuestion()
      showAwardPopup.value = false
    }
  }
}

const decrementCurrForm = () => {
  if (currForm.value > 0) currForm.value--
}

const isComplete = computed(() => currForm.value >= totalItems.value)

const closeAwardPopup = async () => {
  showAwardPopup.value = false
  currForm.value++
  await startQuestion()
}

const startQuestion = async () => {
  // await axios.patch(`${API}/patch/start/${String(userId)}?question_number=${Number(currForm.value)}`)
  // .then(response => console.log('start_question feita com sucesso'))
  // .catch(error => console.error('Erro ao fazer start_question: ', error))
}

const endQuestion = async () => {
  const questionNumber = currForm.value
  const answer = selectedAnswers.value[questionNumber]
  // await axios.patch(`${API}/patch/end/${String(userId)}?question_number=${Number(questionNumber)}&answer=${Number(answer)}`)
  // .then(response => console.log('end_question feita com sucesso'))
  // .catch(error => console.error('Erro ao fazer end_question: ', error))
}

onMounted(async () => {
  if (currForm.value === 0) {
    await startQuestion()
  }
})
</script>

<template>
  <div class="container-fluid">
    <div v-if="!isComplete">
      <FormHeaderComponent @goBackQuestion="decrementCurrForm" />
      <FormComponent
        :question="formData[currForm].question"
        :answers="formData[currForm].answers"
        :selectedAnswerIndex="selectedAnswers[currForm]"
        :userId="userId"
        :questionNumber="Number(currForm)"
        @next-question="updateCurrForm"
        @answerSelected="(answer) => (selectedAnswers[currForm] = answer)"
      />
      <FormProgressBarComponent
        :totalItems="totalItems"
        :answeredItems="currForm"
        style="padding-bottom: 5%"
      />
      <FormAwardComponent v-if="showAwardPopup" @award="handleAward" @close="closeAwardPopup" />
      <PresenteComponent
        v-if="showPresente"
        :title="presentTitle"
        :content="presentContent"
        @close="handleClosePresente"
      />
    </div>
    <div v-else>
      <FinalFormComponent :userId="userId" />
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

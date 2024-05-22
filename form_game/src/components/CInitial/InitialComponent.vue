<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FormNavigationComponent from '../CForm/FormNavigationComponent.vue'

const { userId } = defineProps<{
  userId: string
}>()

const showForm = ref(false)

const messages = [
  'Estou aqui para ajudá-lo da melhor maneira possível. Para podermos nos conhecer melhor e oferecer um suporte personalizado, gostaria de fazer algumas perguntas.',
  'Isso vai nos ajudar a entender suas necessidades e a oferecer o apoio mais adequado para você. Vamos começar?'
]
const typedMessage1 = ref('')
const typedMessage2 = ref('')
const showButton = ref(false)
const typingSpeed = 10

const transitioning = ref(false)

function goToForm() {
  transitioning.value = true
  showForm.value = true
}

function typeMessage(message: string, typedMessageRef: typeof typedMessage1, callback: () => void) {
  let index = 0
  const timer = setInterval(() => {
    typedMessageRef.value += message.charAt(index)
    index++
    if (index >= message.length) {
      clearInterval(timer)
      callback()
    }
  }, typingSpeed)
}

onMounted(() => {
  typeMessage(messages[0], typedMessage1, () => {
    setTimeout(() => typeMessage(messages[1], typedMessage2, () => (showButton.value = true)), 500)
  })
})
</script>

<template>
  <transition name="slide">
    <div v-if="!showForm" class="container">
      <div class="header">
        <div class="avatar">
          <img src="../../assets/avatar-ella.png" alt="Avatar" class="header-avatar" />
          Ella
        </div>
        <img src="../../assets/juntos_logo_header.png" alt="Logo" class="header-logo" />
        <div></div>
      </div>
      <div class="chat">
        <div class="chat-message bot">
          <p>{{ typedMessage1 }}</p>
        </div>
        <div class="chat-message bot" v-if="typedMessage2">
          <p>{{ typedMessage2 }}</p>
        </div>
      </div>
      <div v-if="showButton" class="form-button">
        <button class="green-button" @click="goToForm">Continuar</button>
      </div>
      <!-- <div class="chat-input">
                <input type="text" class="chat-input-field" placeholder="Escreva uma mensagem" disabled>
                <i class="bi bi-send-fill"></i>
            </div> -->
    </div>
    <FormNavigationComponent v-else :userId="userId" />
  </transition>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.header {
  background-color: #60c3b4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-radius: 0px 0px 8px 8px;
  width: 100vw;
  box-sizing: border-box;
}

.header-avatar {
  border-radius: 50%;
  width: 50px;
  height: auto;
}

.header-logo {
  max-width: 120px;
}

.avatar {
  color: #000;
}

.green-button {
  background-color: #3db2a0;
  border: none;
  color: white;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
}

.chat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-top: 5%;
  height: 50%;
  width: 100%;
  overflow: auto;
}

.chat-message {
  border-radius: 16px;
  padding: 10px 32px 10px 16px;
  border: 1px solid #12927e;
  padding: 8px 12px;
  max-width: 80%;
  margin: 4px;
  word-wrap: break-word;
}

.bot {
  align-self: flex-start;
}

.form-button {
  margin-top: 100px;
}

.chat-input {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 70%;
  padding: 12px 24px;
  align-items: center;
}

.chat-input-field {
  width: 100%;
  padding: 18px 16px 18px 16px;
  border-radius: 12px;
  border: 2px solid #addad3;
}

.bi-send-fill {
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  color: #12927e;
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

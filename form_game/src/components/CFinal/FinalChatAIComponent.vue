<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, watch, nextTick } from 'vue'

const userMessage = ref('')
const messages = ref([{ text: 'Olá, Eu sou a Ella. Conte-me como você está ?', sender: 'bot' }])

const sendMessage = () => {
  if (userMessage.value.trim() !== '') {
    messages.value.push({ text: userMessage.value, sender: 'user' })
    userMessage.value = ''
    nextTick(() => {
      setTimeout(() => {
        messages.value.push({ text: 'Eu sou a Ella e estou aqui para ajudar..', sender: 'bot' })
        nextTick(scrollToBottom)
      }, 1000) // Delay de 1 segundo
      nextTick(scrollToBottom)
    })
  }
}

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    sendMessage()
  }
}

const scrollToBottom = () => {
  const chatContainer = document.querySelector('.chat-container')
  chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' })
}

onMounted(scrollToBottom)

watch(
  messages,
  () => {
    nextTick(scrollToBottom)
  },
  { deep: true }
)
</script>

<template>
  <div class="container">
    <div class="header p-4">
      <div class="avatar">
        <img src="../../assets/avatar-ella.png" alt="Avatar" class="header-avatar" />
        <span class="ella"> Ella</span>
      </div>
      <div class="col-sm-4" style="width: auto">
        <a href="https://juntos.art.br" target="blank" style="text-decoration: none">
          <div class="row">
            <div class="col-sm-2 my-auto text-center" style="width: auto">
              <img
                src="../../assets/Logo Juntos.png"
                alt="Logo da JunTOs"
                class="img-fluid img-logo"
              />
            </div>
            <div class="col-sm-4 my-auto" style="width: auto">
              <div class="row text-center">
                <div class="col logo-text-title">JUNTOS</div>
              </div>
              <div class="row text-center">
                <div class="col logo-text-sub">METAVERSOS</div>
              </div>
              <div class="row text-center">
                <div class="col logo-text-sub">TERAPÊUTICOS</div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="header-actions">
        <RouterLink to="/contato" class="contact-link">Podemos entrar em contato?</RouterLink>
        <a
          href="https://hospitaldonahelena.centraldemarcacao.com.br/"
          target="new"
          class="consult-button"
        >
          Marcar uma consulta</a
        >
      </div>
    </div>
    <div class="chat-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.sender === 'user' ? 'user-message' : 'ia-message']"
      >
        {{ message.text }}
      </div>
    </div>
    <div class="chat-input">
      <input
        type="text"
        class="chat-input-field"
        placeholder="Escreva uma mensagem"
        v-model="userMessage"
        @keypress="handleKeyPress"
      />
      <i class="bi bi-send-fill" @click="sendMessage"></i>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 5px;
}
.header {
  background-color: #0ea08a;
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
  width: 60px;
  height: auto;
}
.header-logo {
  max-width: 150px;
}
.avatar {
  color: #000;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.contact-link {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}
.contact-link:hover {
  text-decoration: underline;
}
.consult-button {
  background-color: #fff;
  color: #0ea08a;
  border: none;
  border-radius: 16px;
  padding: 16px 24px 16px 24px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}
.consult-button:hover {
  transform: scale(1.1);
}

.chat-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 100vw;
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  flex-grow: 1;
}

.message {
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 16px;
  max-width: 80%;
}

.user-message {
  background-color: #0ea08a;
  color: white;
  align-self: flex-end;
}

.ia-message {
  background-color: #e5e5ea;
  color: black;
  align-self: flex-start;
}

.chat-input {
  display: flex;
  width: 100%;
  padding: 12px 24px;
  align-items: center;
  box-sizing: border-box;
}

.chat-input-field {
  width: calc(100% - 40px);
  padding: 18px 16px;
  border-radius: 12px;
  border: 2px solid #addad3;
}

.bi-send-fill {
  margin-left: -40px;
  color: #12927e;
  cursor: pointer;
}
.ella {
  font-weight: 500;
  font-size: 16pt;
}
.img-logo {
  height: 5rem;
  width: 5rem;
}
.logo-text-title {
  font-family: Roboto, sans-serif;
  letter-spacing: 3pt;
  font-weight: bold;
  color: white;
  font-size: 18pt;
}
.logo-text-sub {
  font-family: Roboto, sans-serif;
  letter-spacing: 3pt;
  color: white;
  font-size: 8pt;
}
</style>

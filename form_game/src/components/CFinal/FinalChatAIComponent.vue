<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, watch, nextTick } from 'vue'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const { userId } = defineProps<{
  userId: string
}>()

const menuOpen = ref(false)
const loading = ref(false)
const userMessage = ref('')
const messages = ref([
  {
    text: 'Olá, eu sou a Ella. Estou aqui para te auxiliar em temas relacionados à saúde mental. Sinta-se à vontade para conversar comigo!',
    sender: 'ai'
  }
])

const API = 'https://5efa99a1-9b03-462b-8a83-5e04136e01fb-00-j7n4fy74wrpw.spock.replit.dev'

const sendMessage = async () => {
  if (userMessage.value.trim() !== '') {
    loading.value = true
    const userText = userMessage.value
    messages.value.push({ text: userMessage.value, sender: 'user' })
    userMessage.value = ''
    nextTick(() => {
      nextTick(scrollToBottom)
    })
    try {
      const response = await axios.post(`${API}/chat/post`, { user_message: userText })
      const AIMessage = response.data.assistant_message
      messages.value.push({ text: AIMessage, sender: 'ai' })

      // await axios.patch(`${API}/patch/add_chat_message/${String(userId)}?sender=user&message=${String(userText)}`)
      // .catch(error => console.error('Erro ao fazer add_chat_message: ', error))

      // await axios.patch(`${API}/patch/add_chat_message/${String(userId)}?sender=ai&message=${String(AIMessage)}`)
      // .catch(error => console.error('Erro ao fazer add_chat_message: ', error))
    } catch (error) {
      console.error('Error sending message:', error)
      messages.value.push({
        text: 'Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente.',
        sender: 'ai'
      })
    } finally {
      loading.value = false
      nextTick(scrollToBottom)
    }
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

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="container">
    <div class="header p-4">
      <div class="header-left">
        <div class="avatar">
          <img src="../../assets/avatar-ella.png" alt="Avatar" class="header-avatar" />
          <span class="ella"> Ella</span>
        </div>
      </div>
      <div class="header-center">
        <a href="https://juntos.art.br" target="blank" style="text-decoration: none">
          <div class="logo-container">
            <img src="../../assets/Logo Juntos.png" alt="Logo da JunTOs" class="img-logo" />
            <div class="logo-text">
              <div class="logo-text-title">JUNTOS</div>
              <div class="logo-text-sub">METAVERSOS</div>
              <div class="logo-text-sub">TERAPÊUTICOS</div>
            </div>
          </div>
        </a>
      </div>
      <div class="header-right">
        <RouterLink to="/contato" class="contact-link">Podemos entrar em contato?</RouterLink>
        <a
          href="https://hospitaldonahelena.centraldemarcacao.com.br/"
          target="new"
          class="consult-button"
        >
          Marcar uma consulta
        </a>
        <i class="bi bi-list hamburger-icon right-icon" @click="toggleMenu"></i>
      </div>
    </div>
    <div :class="['menu-links', { open: menuOpen }]">
      <ul>
        <li>
          <RouterLink to="/contato" @click="toggleMenu" class="mobile-menu-item"
            >Podemos entrar em contato?</RouterLink
          >
        </li>
        <li>
          <a
            href="https://hospitaldonahelena.centraldemarcacao.com.br/"
            target="new"
            @click="toggleMenu"
            class="mobile-menu-item"
            >Marcar uma consulta</a
          >
        </li>
      </ul>
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
        :disabled="loading"
      />
      <i class="bi bi-send-fill" @click="sendMessage" :class="{ disabled: loading }"></i>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
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

.header-left,
.header-right {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 20px;
}

.header-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
}

.header-avatar {
  border-radius: 50%;
  width: 60px;
  height: auto;
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
  padding: 16px 24px;
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
  gap: 20px;
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

.logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
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

.hamburger-icon {
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
}

@media (max-width: 1198px) {
  .hamburger-icon {
    display: block;
  }

  .contact-link,
  .consult-button {
    display: none;
  }
}

.menu-links {
  position: relative;
  top: 0;
  width: 100%;
  background-color: #0ea08a;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 0.5rem;
  text-align: center;
  z-index: 1000;
}

.menu-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-links li {
  padding: 1rem;
  z-index: 1000;
}

.mobile-menu-item {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.mobile-menu-item:hover {
  background-color: white;
  color: #0ea08a;
  border-radius: 0.5rem;
}

.menu-links.open {
  max-height: 10rem;
}

.right-icon {
  margin-left: auto;
}
</style>

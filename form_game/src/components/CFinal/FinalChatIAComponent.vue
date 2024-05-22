<script setup lang="ts">
import { ref, onMounted } from 'vue';

const userMessage = ref('');
const messages = ref([
  { text: 'Olá, John Doe! Conte-me como você está ?', sender: 'bot' },
  { text: 'Eu estou triste', sender: 'user' },
  { text: 'O que aconteceu com você?', sender: 'bot' },
  { text: 'Minha família não me entende.', sender: 'user' },
  { text: 'Entendi. Eu quero que saiba que eu estou aqui para ouvir e entender você.', sender: 'bot' }
]);

const sendMessage = () => {
  if (userMessage.value.trim() !== '') {
    messages.value.push({ text: userMessage.value, sender: 'user' });
    userMessage.value = '';
    setTimeout(() => {
      messages.value.push({ text: 'Eu sou um bot e estou aqui para ajudar.', sender: 'bot' });
      scrollToBottom();
    }, 1000);
    scrollToBottom();
  }
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
};

const scrollToBottom = () => {
  const chatContainer = document.querySelector('.chat-container');
  chatContainer?.scrollTo(0, chatContainer.scrollHeight);
};

onMounted(() => {
  scrollToBottom();
});
</script>

<template>
    <div class="container">
      <div class="header">
        <div class="avatar">
          <img src="../../assets/avatar-ella.png" alt="Avatar" class="header-avatar"> 
          Ella
        </div>
        <img src="../../assets/juntos_logo_header.png" alt="Logo" class="header-logo">
        <div class="header-actions">
          <a href="#" class="contact-link">Podemos entrar em contato?</a>
          <button class="consult-button">Marcar uma consulta</button>
        </div>
      </div>
      <div class="chat-container">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender === 'user' ? 'user-message' : 'ia-message']">
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
        >
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
    padding-bottom: 60px;
}
.header {
    background-color: #0EA08A;
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
    color: #0EA08A;
    border: none;
    border-radius: 16px;
    padding: 16px 24px 16px 24px;
    font-size: 16px;
    cursor: pointer;
    /* transition: background-color 0.3s, color 0.3s; */
}
/* .consult-button:hover {
    background-color: #0EA08A;
    color: #fff;
} */

.chat-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  max-height: 60vh;
}

.message {
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 16px;
  max-width: 80%;
}

.user-message {
  background-color: #0EA08A;
  color: white;
  align-self: flex-end;
}

.ia-message {
  background-color: #E5E5EA;
  color: black;
  align-self: flex-start;
}

.chat-input{
    position: absolute;
    display: flex;
    bottom: 0;
    width: 100%;
    padding: 12px 24px;
    align-items: center;
}

.chat-input-field {
    width: 100%;
    padding: 18px 16px 18px 16px;
    border-radius: 12px;
    border: 2px solid #ADDAD3;
}

.bi-send-fill{
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    color: #12927E;
    cursor: pointer;
}
</style>
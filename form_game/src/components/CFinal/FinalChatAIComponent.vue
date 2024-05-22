<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';

const userMessage = ref('');
const messages = ref([
  { text: 'Olá, Eu sou a Ella. Conte-me como você está ?', sender: 'bot' },
]);

const sendMessage = () => {
  if (userMessage.value.trim() !== '') {
    messages.value.push({ text: userMessage.value, sender: 'user' });
    userMessage.value = '';
    nextTick(() => {
      setTimeout(() => {
        messages.value.push({ text: 'Eu sou a Ella e estou aqui para ajudar..', sender: 'bot' });
        nextTick(scrollToBottom);
      }, 1000); // Delay de 1 segundo
      nextTick(scrollToBottom);
    });
  }
};

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
};

const scrollToBottom = () => {
  const chatContainer = document.querySelector('.chat-container');
  chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
};

onMounted(scrollToBottom);

watch(messages, () => {
  nextTick(scrollToBottom);
}, { deep: true });

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
    padding-bottom: 5px;
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
  background-color: #0EA08A;
  color: white;
  align-self: flex-end;
}

.ia-message {
  background-color: #E5E5EA;
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
  border: 2px solid #ADDAD3;
}

.bi-send-fill {
  margin-left: -40px;
  color: #12927E;
  cursor: pointer;
}
</style>
<template>
    <div class="header">
      <button @click="goBack" class="btn">Voltar</button>
      <img src="@/assets/logo.png" alt="Logo" class="header-logo">
      <button @click="confirmClose" class="btn">Fechar</button>
    </div>
  
    <!-- Popup de Confirmação para Fechar o Formulário -->
    <div v-if="showConfirm" class="popup-overlay">
      <div class="popup">
        <h2>Confirmar Fechamento</h2>
        <p>Tem certeza que deseja fechar o formulário?</p>
        <button @click="closeForm" class="btn">Sim</button>
        <button @click="showConfirm = false" class="btn">Não</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const showConfirm = ref(false);
  const router = useRouter();
  
  const goBack = () => {
    // Emitir evento ou chamar método para voltar à questão anterior
    router.go(-1); // Exemplo de navegação simples para voltar
  }
  
  const confirmClose = () => {
    showConfirm.value = true;
  }
  
  const closeForm = () => {
    showConfirm.value = false;
    router.push('/'); // Ajuste para o caminho da página inicial
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .header-logo {
    max-width: 100px; /* Ajuste conforme necessário */
  }
  .btn {
    padding: 5px 10px;
    margin: 0 10px;
    cursor: pointer;
  }
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  </style>
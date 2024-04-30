<template>
    <div class="header">
      <button @click="goBack" class="btn">Voltar</button>
      <img src="" alt="Logo" class="header-logo">
      <button @click="confirmClose" class="btn">Fechar</button>
    </div>
  
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
  const emits = defineEmits(['goBackQuestion']);
  const router = useRouter();
  
  const goBack = () => {
    emits('goBackQuestion')
  }
  
  const confirmClose = () => {
    showConfirm.value = true;
  }
  
  const closeForm = () => {
    showConfirm.value = false;
    router.push('/');
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
    max-width: 100px;
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
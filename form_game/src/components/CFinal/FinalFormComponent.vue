<script setup lang="ts">
import confetti from 'canvas-confetti';
import { onMounted } from 'vue';


const emits = defineEmits(['switch']);

const handleButtonClick = () => {
  emits('switch');
};


const launchConfetti = () => {
  confetti({
    particleCount: 500,
    spread: 90,
    origin: { y: 0.7 }
  });
}

onMounted(() => {
  launchConfetti();
});
</script>

<template>
    <div class="header">
      <img src="../../assets/juntos_logo_header.png" alt="Logo" class="header-logo">
    </div>
    <div class="popup-overlay">
      <div class="popup">
        <img src="../../assets/congratulations-img.png" alt="Congratulations" class="congratulations-logo">
        <div class="container-text">
            <h1>
                Parabéns!
            </h1>
            <p>
                Obrigado por preencher o questionário. Agora que tenho uma compreensão inicial de suas necessidades, estou aqui para  oferecer suporte. 
            </p>
            <p>
                Você está pronto para começar nossa conversa agora? Estou aqui para ajudar. Sinta-se à vontade para compartilhar o que está em sua mente.
            </p>
            <div class="button-container">
                <button @click="handleButtonClick" class="green-button">Conversar</button>
            </div>
            
        </div>
      </div>
    </div>
</template>

<style scoped>
.header {
    display: none;
    justify-content: center;
    align-items: center;
    padding: 10px;
    z-index: 3;
}

.header-logo {
    max-width: 120px;
    z-index: 4;
}
  
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #60C3B4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.popup {
    background: white;
    min-width: 360px;
    max-width: 920px;
    min-height: 360px;
    max-height: 500px;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
}

.congratulations-logo{
    max-width: 400px;
}

.container-text {
    display: flex;
    flex-direction: column;
    padding-left: 30px;

}

.green-button {
    background-color: #3DB2A0;
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
 
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 10%;
}

@media (max-width: 800px) {
    .congratulations-logo {
        display: none;
    }
    .header {
        display: flex;
    }
}
</style>
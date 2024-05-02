<template>
    <div class="popup-overlay">
      <div class="popup">
        <div>
            <h2>Parabens pelo progresso!</h2>
            <p>Como recompensa pela sua dedicação, você recebeu dois prêmios especiais!</p>
        </div>
        <div class="award-buttons-container">
            <button class="award-button-item">
                <img src="../assets/article-img.png" alt="article" class="img-btn">
                <span>Artigo</span>
            </button>
            <button class="award-button-item">
                <img src="../assets/fanfic-img.png" alt="fanfic" class="img-btn">
                <span>Fanfic</span>
            </button>
        </div>
        <div class="continue-button-container">
            <button @click="closePopup" class="green-button">Continuar</button>
        </div>
            
      </div>
      
    </div>
</template>

<script setup lang="ts">

const emits = defineEmits(['close'])

const closePopup = () => {
  emits('close')
}
</script>

<style scoped>
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup {
        background: white;
        min-width: 360px;
        max-width: 500px;
        min-height: 360px;
        max-height: 500px;
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 2;
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

    .img-btn{
        max-width: 120px;
        height: 120px;
    }

    .award-buttons-container {
        display: flex;
        justify-content: center;
        gap: 40px;
    }

    .continue-button-container {
        display: flex;
        justify-content: center;
        padding-top: 10%;
    }

    .award-button{
        display: flex;
        justify-items: center;
    }

    .award-button-item{
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 16px;
        border: 1px solid #ADDAD3;
        padding: 16px;
    }
</style>
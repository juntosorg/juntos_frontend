<template>
  <div class="header">
    <button @click="goBack" class="button-back">
      <span class="button-back-text">Retornar</span>
      <i class="bi bi-arrow-left button-back-icon"></i>
    </button>
    <div class="d-flex align-items-center justify-content-center" style="flex: 1">
      <a href="https://juntos.art.br" target="blank" style="text-decoration: none">
        <div class="row no-gutts d-flex justify-content-center align-items-center">
          <div class="col-6 my-auto text-center" style="width: auto">
            <img
              src="../../assets/Logo Juntos.png"
              alt="Logo da JunTOs"
              class="img-fluid img-logo"
            />
          </div>
          <div class="col-6 my-auto" style="width: auto">
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
    <button @click="confirmClose" class="button-close"><i class="bi bi-x-lg"></i></button>
  </div>

  <div v-if="showConfirm" class="popup-overlay">
    <div class="popup">
      <h2>Confirmar Fechamento</h2>
      <p>Tem certeza que deseja fechar o questionário?</p>
      <button @click="closeForm" class="button-popup">Sim</button>
      <button @click="showConfirm = false" class="button-popup">Não</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showConfirm = ref(false)
const emits = defineEmits(['goBackQuestion'])
const router = useRouter()

const goBack = () => {
  emits('goBackQuestion')
}

const confirmClose = () => {
  showConfirm.value = true
}

const closeForm = () => {
  showConfirm.value = false
  router.push('/')
}
</script>

<style scoped>
.img-logo {
  height: 5rem;
  width: 5rem;
}
.logo-text-title {
  font-family: Roboto, sans-serif;
  letter-spacing: 3pt;
  font-weight: bold;
  color: black;
  font-size: 18pt;
}
.logo-text-sub {
  font-family: Roboto, sans-serif;
  letter-spacing: 3pt;
  color: black;
  font-size: 8pt;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.header-logo {
  max-width: 120px;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.button-close {
  background-color: transparent;
  padding: 16px 24px;
  margin: 0 10px;
  border: none;
  color: #addad3;
  font-size: 1.5em;
}
.button-back {
  background-color: transparent;
  padding: 16px 24px;
  margin: 0 10px;
  border: 1px solid #addad3;
  color: #addad3;
  border-radius: 12px;
  cursor: pointer;
}
.button-popup {
  color: #000;
  padding: 8px 16px;
  margin: 0 10px;
  border: 1px solid #000;
  border-radius: 12px;
  cursor: pointer;
}
.button-back-icon {
  display: none;
  color: #addad3;
  font-size: 1.5em;
}

@media (max-width: 770px) {
  .header-logo {
    max-width: 80px;
  }
  .button-back-text {
    display: none;
  }
  .button-back-icon {
    display: inline-block;
  }
  .button-back {
    padding: 12px;
    border: none;
  }
}
</style>

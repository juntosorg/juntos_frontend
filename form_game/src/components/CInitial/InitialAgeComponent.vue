<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const API = 'https://5efa99a1-9b03-462b-8a83-5e04136e01fb-00-j7n4fy74wrpw.spock.replit.dev'

const age = ref('')
const userId = ref('')
const emit = defineEmits(['continue'])

onMounted(() => {
  const userData = {}
  // axios
  //   .post(`${API}/post/user`, userData)
  //   .then((response) => {
  //     userId.value = response.data._id
  //   })
  //   .catch((error) => {
  //     console.error('Erro ao criar usuário: ', error)
  //   })
})

function continueToNext() {
  // axios
  //   .patch(`${API}/patch/${userId.value}`, { age: age.value })
  //   .then(() => {
  emit('continue', userId.value)
  //   })
  //   .catch((error) => {
  //     console.error('Erro ao atualizar idade: ', error)
  //   })
}
</script>

<template>
  <div class="container-fluid" style="height: 100vh">
    <div
      class="d-flex flex-column align-items-start-center justify-content-center"
      style="height: 100vh"
    >
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
      <div class="d-flex align-items-center justify-content-center" style="flex: 5">
        <div class="modal-box">
          <h1 style="font-weight: bold">Qual a sua idade?</h1>
          <label class="d-flex flex-column">
            Idade
            <input
              v-model="age"
              type="number"
              min="12"
              max="120"
              name="age"
              placeholder="Idade"
              class="age-input"
            />
          </label>
          <div @click="continueToNext" class="continuar-btn">Continuar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
.modal-box {
  box-shadow: 0px 4px 7px 2px #00000040;
  padding: 2rem;
  border-radius: 1rem;
  font-family: Roboto, sans-serif;
}
.modal-box h1 {
  font-weight: bold;
}
.modal-box label {
  margin: 2rem 0;
}
.age-input {
  border: 2px solid #0ea08a;
  outline-color: #0ea08a;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.continuar-btn {
  background-color: #0ea08a;
  border-radius: 0.5rem;
  width: 8rem;
  padding: 1rem;
  text-align: center;
  color: white;
  margin: auto;
}
.continuar-btn:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: #4cb3c3;
}
</style>

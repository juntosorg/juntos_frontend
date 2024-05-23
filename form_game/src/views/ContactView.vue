<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const telefone = ref('')
const email = ref('')
</script>

<template>
  <div
    class="container-fluid d-flex flex-column align-items-center justify-content-center"
    style="height: 100vh"
  >
    <div
      class="row d-flex flex-column align-items-start justify-content-start mt-3"
      style="flex: 1"
    >
      <div class="col-sm-12">
        <a href="https://juntos.art.br" target="blank" style="text-decoration: none">
          <div class="row no-gutts d-flex justify-content-center align-items-center">
            <div class="col-6 my-auto text-center" style="width: auto">
              <img
                src="../assets/Logo Juntos.png"
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
    </div>
    <div
      class="d-flex text-center mt-3 align-items-start justify-content-center w-100"
      style="flex: 5"
    >
      <div class="row main-box">
        <div class="col-sm-6 col-12">
          <div class="contact-form mx-auto">
            <div class="row mt-3">
              <div class="col-sm-12 text-left">
                <h1 class="title">Contato</h1>
              </div>
            </div>
            <div class="row mt-3">
              <label class="d-flex flex-column align-items-start">
                Nome
                <input
                  v-model="nome"
                  type="text"
                  maxlength="15"
                  name="nome"
                  placeholder="Ex: John Doe"
                  class="input"
                />
              </label>
            </div>
            <div class="row mt-3">
              <label class="d-flex flex-column align-items-start">
                Telefone
                <input
                  v-model="telefone"
                  type="tel"
                  maxlength="20"
                  name="telefone"
                  placeholder="(97) 2840-7733"
                  class="input"
                />
              </label>
            </div>
            <div class="row mt-3">
              <label class="d-flex flex-column align-items-start">
                Email
                <input
                  v-model="email"
                  type="email"
                  maxlength="120"
                  name="email"
                  placeholder="Ex: johndoe@gmail.com"
                  class="input"
                />
              </label>
            </div>
            <div class="row mt-4 mb-3">
              <div class="enviar">Enviar</div>
            </div>
          </div>
        </div>
        <div
          class="d-sm-flex flex-column align-items-center justify-content-center col-sm-6 image-div"
        >
          <img src="../assets/contact.png" class="img img-fluid" alt="Contato" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
.title {
  text-align: left;
  font-weight: bold;
}
.main-box {
  width: 60%;
  box-shadow: 0px 1px 4px 0px #00000040;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}
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
.image-div {
  display: block;
}
.input {
  border: 2px solid #0ea08a;
  outline-color: #0ea08a;
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
}
@media (max-width: 575.98px) {
  .image-div {
    display: none;
  }
}
.enviar {
  width: auto;
  padding: 1rem 1.5rem;
  margin: auto;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px 0px #12927e40;
  background-color: #3db2a0;
  color: white;
}
.enviar:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: #4cb3c3;
}
</style>

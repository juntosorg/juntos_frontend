<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const scrollContainer = document.getElementById('text-box')
  const progressBar = document.getElementById('progress-bar')
  const headerBox = document.getElementsByClassName('header-box')[0]
  if (scrollContainer && headerBox) {
    scrollContainer.style.marginTop = `${headerBox.clientHeight + 5}px`
  }
  if (scrollContainer && progressBar) {
    scrollContainer.addEventListener('scroll', () => {
      const scrollTop = scrollContainer.scrollTop
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100
      progressBar.style.width = `${scrollPercentage}%`
    })
  }
})

defineProps({
  title: String,
  content: String
})

const emits = defineEmits(['close'])

const closePopup = () => {
  emits('close')
}
function convertNewlinesToBreaks(text: string) {
  return text.replace(/\n/g, '<br>')
}
</script>

<template>
  <div class="container-fluid popup-overlay">
    <div class="header-box d-flex flex-column">
      <div class="row d-flex align-items-center justify-content-center mt-3">
        <div class="col-6">
          <a href="https://juntos.art.br" target="blank" style="text-decoration: none">
            <div class="row d-flex justify-content-start align-items-center">
              <div class="col-12 my-auto text-center" style="width: auto">
                <img
                  src="../../assets/Logo Juntos.png"
                  alt="Logo da JunTOs"
                  class="img-fluid img-logo"
                />
              </div>
              <!-- <div class="col-6 my-auto" style="width: auto">
                  <div class="row text-center">
                    <div class="col logo-text-title">JUNTOS</div>
                  </div>
                  <div class="row text-center">
                    <div class="col logo-text-sub">METAVERSOS</div>
                  </div>
                  <div class="row text-center">
                    <div class="col logo-text-sub">TERAPÊUTICOS</div>
                  </div>
                </div> -->
            </div>
          </a>
        </div>
        <div class="col-6">
          <div class="d-flex justify-content-end align-items-center">
            <div @click="closePopup" class="close">X</div>
          </div>
        </div>
      </div>
      <div class="progress-box">
        <div id="progress-border"></div>
        <div id="progress-bar"></div>
      </div>
      <div class="row title-row">
        <h1 class="title-style">{{ title }}</h1>
      </div>
    </div>
    <div class="row" id="text-box">
      <p v-html="convertNewlinesToBreaks(content)" class="content-style"></p>
      <div class="mt-5">
        <div class="col-12 text-center mobile-comecar" @click="closePopup">PRÓXIMA QUESTÃO</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}
.header-box {
  padding: 0 1.8rem;
  position: fixed;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
}
#text-box {
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 80%;
  text-align: center;
  margin: 3rem auto;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.progress-box {
  position: relative;
  margin-top: 3rem;
  background-color: blue;
}
#progress-border {
  position: absolute;
  top: 0;
  left: 0;
  border: 0.1rem solid #86d2c6;
  height: 1rem;
  border-radius: 1rem;
  width: 100%;
  background-color: white;
}
#progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  border: 5px solid #86d2c6;
  height: 1rem;
  border-radius: 1rem;
  /* width: 10%; */
  max-width: 100%;
  background-color: #86d2c6;
  z-index: 1;
}
.title-row {
  margin-top: 3rem;
}
.title-style {
  text-align: left;
  /* background-color: red; */
  width: 80%;
  margin: 0 auto;
}
.content-style {
  font-size: 18pt;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
}
h1 {
  text-align: center;
  font-weight: bold;
  font-size: 24pt;
}
.close {
  color: #addad3;
  font-size: 24pt;
}
.close:hover {
  cursor: pointer;
}
p {
  padding: 0 1.5rem;
  text-align: justify;
}
.scroller {
  margin-top: 3rem;
}
.mobile-comecar {
  cursor: pointer;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.1rem;
  color: white;
  background-color: #0ea08a;
  padding: 1rem;
  border-radius: 1rem;
  width: 10rem;
  margin: auto;
  margin-bottom: 10rem;
}
.mobile-comecar:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: #4cb3c3;
}
</style>

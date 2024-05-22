<script setup lang="ts">
import { RouterLink } from 'vue-router'

function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')
  menu?.classList.toggle('open')
  icon?.classList.toggle('open')
}
</script>

<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-xl-10 col-12">
        <div class="row no-gutters menu-row d-flex justify-content-between">
          <div class="col-sm-4" style="width: auto">
            <a href="https://juntos.art.br" target="blank" style="text-decoration: none">
              <div class="row">
                <div class="col-sm-2 my-auto text-center" style="width: auto">
                  <img
                    src="../assets/Logo Juntos.png"
                    alt="Logo da JunTOs"
                    class="img-fluid img-logo"
                  />
                </div>
                <div class="col-sm-4 my-auto" style="width: auto">
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
          <nav class="col-sm-8 navbar navbar-expand-xl nav-custom">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Menu JunTOs"
              @click="toggleMenu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="menu-links">
              <li>
                <RouterLink to="/" @click="toggleMenu" class="mobile-menu-item"> Home </RouterLink>
                <!-- <a href="" @click="toggleMenu" class="mobile-menu-item">Home</a> -->
              </li>
              <li>
                <RouterLink to="/contato" @click="toggleMenu" class="mobile-menu-item">
                  Contato
                </RouterLink>
                <!-- <a href="" @click="toggleMenu" class="mobile-menu-item">Contato</a> -->
              </li>
              <!-- <li>
                <a href="" @click="toggleMenu" class="mobile-menu-item">Termos de Serviço</a>
              </li> -->
              <!-- <li>
                <a href="" @click="toggleMenu" class="mobile-menu-item">Política de Privacidade</a>
              </li> -->
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active menu-item">
                  <RouterLink to="/" class="nav-link white-color"> Home </RouterLink>
                  <!-- <a href="" @click="toggleMenu" class="mobile-menu-item">Home</a> -->
                </li>
                <li class="nav-item menu-item">
                  <RouterLink to="/contato" class="nav-link white-color"> Contato </RouterLink>
                  <!-- <a href="" @click="toggleMenu" class="mobile-menu-item">Contato</a> -->
                </li>
                <!-- <li class="nav-item menu-item">
                  <a class="nav-link white-color" href="#">Termos de Serviço</a>
                </li>
                <li class="nav-item menu-item">
                  <a class="nav-link white-color" href="#">Política de Privacidade</a>
                </li> -->
              </ul>
            </div>
          </nav>
        </div>
        <div class="row">
          <div class="col-sm-12 emotions-col mt-5 px-5 text-wrap">
            <p class="emotions">
              Ei! Como estão suas <span style="color: #4cb3c3; font-weight: bold">emoções</span>?
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-wrap px-5">
            <p class="emotions-sub text">
              Prepare-se para uma emocionante jornada de autodescoberta e bem-estar mental! Nosso
              jogo não só revelará segredos valiosos sobre saúde mental, mas também o presenteia com
              prêmios dedicados a fortalecer sua mente e alma.
            </p>
          </div>
        </div>
        <RouterLink to="/form" style="text-decoration: none">
          <div class="row mt-3 mobile-comecar-row">
            <div class="col-12 text-center mobile-comecar">COMEÇAR</div>
          </div>
        </RouterLink>
        <div class="row quiz-info-row mt-5 px-sm-5 text-center align-items-center d-flex">
          <div class="col-sm-3 col-6" style="width: auto">
            <div class="row">
              <div class="col-sm-6" style="width: auto">
                <i class="bi bi-question-circle-fill icon"></i>
              </div>
              <div
                class="col-sm-6 d-flex flex-column justify-content-center align-items-center"
                style="width: auto"
              >
                <div class="row">
                  <div class="col-sm-12 label" style="width: auto">QUANTIDADE</div>
                </div>
                <div class="row">
                  <div class="col-sm-12 sublabel" style="width: auto">26 questões</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-9 col-6" style="width: auto">
            <div class="row">
              <div class="col-sm-6" style="width: auto">
                <i class="bi bi-clock-fill icon"></i>
              </div>
              <div
                class="col-sm-6 d-flex flex-column justify-content-center align-items-center"
                style="width: auto"
              >
                <div class="row">
                  <div class="col-sm-12 label" style="width: auto">DURAÇÃO</div>
                </div>
                <div class="row">
                  <div class="col-sm-12 sublabel" style="width: auto">5 minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-sm-5 d-flex align-items-center quiz-info-row" style="margin-top: 8rem">
          <div class="col-sm-4 hospital-box">
            <a href="https://www.donahelena.com.br/" target="blank">
              <img
                src="../assets/hospital.png"
                alt="Logo Hospital Dona Helena"
                class="img-fluid img-hospital"
              />
            </a>
          </div>
          <div class="col-sm-8 text-center warning text-wrap px-3">
            (ferramenta indicada para jovens a partir de 12 anos)
          </div>
        </div>
      </div>
      <div class="col-xl-2 background"></div>
    </div>
  </div>
  <RouterLink to="/form">
    <div class="comecar-btn">COMEÇAR</div>
  </RouterLink>
</template>

<style scoped>
.background {
  display: block;
  background-image: url('../assets/landing_view_new_landscape.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
}
.comecar-btn {
  display: block;
  left: 75%;
  top: 35%;
  position: absolute;
  z-index: 1000;
  color: white;
  background-color: #22ae98;
  width: 15rem;
  height: 15rem;
  text-align: center;
  line-height: 15rem;
  border-radius: 13rem;
  box-shadow: 0rem 0.5rem 0.5rem 0rem #60c3b480;
  transition: transform 0.3s;
  font-size: 20pt;
}
.comecar-btn:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: #4cb3c3;
}
@media (min-width: 1200px) {
  .label {
    font-size: 16pt;
  }
  .sublabel {
    font-size: 16pt;
  }
  .emotions-sub {
    width: 80%;
  }
  .mobile-comecar-row {
    display: none;
  }
}
@media (max-width: 1198px) {
  .quiz-info-row {
    justify-content: center;
  }
  .nav-custom {
    width: auto;
    margin-right: 1rem;
  }
  .hospital-box {
    text-align: center;
    margin-bottom: 3rem;
  }
  .label {
    font-size: 10pt;
  }
  .sublabel {
    font-size: 10pt;
  }
  .mobile-comecar-row {
    display: block;
  }
  .emotions-sub {
    width: 100%;
  }
  .comecar-btn {
    display: none;
  }
  .background {
    display: none;
  }
}
.menu-row {
  padding: 16px 0px 16px 0px;
  background-color: #0ea08a;
}
.img-logo {
  height: 5rem;
  width: 5rem;
}
.logo-text-title {
  font-family: Roboto, sans-serif;
  letter-spacing: 3pt;
  font-weight: bold;
  color: white;
  font-size: 18pt;
}
.logo-text-sub {
  font-family: Roboto, sans-serif;
  letter-spacing: 3pt;
  color: white;
  font-size: 8pt;
}
.mobile-menu-item {
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 20pt;
  padding: 5px;
  color: white;
}
.mobile-menu-item:hover {
  background-color: white;
  color: #0ea08a;
  border-radius: 0.5rem;
}
.menu-item {
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 20pt;
  margin-right: 1rem;
  padding: 5px;
  color: white;
}
.menu-item:hover {
  background-color: white;
  border-radius: 0.5rem;
}
.menu-item:hover .white-color {
  color: #0ea08a;
}
.white-color {
  color: white;
}
.emotions {
  font-family: Roboto, sans-serif;
  font-size: 40pt;
  font-weight: bold;
}
.emotions-sub {
  text-align: justify;
  font-family: Roboto, sans-serif;
  font-size: 18pt;
}
.icon {
  color: #0ea08a;
  font-size: 3rem;
}
.label {
  font-family: Roboto, sans-serif;
  font-weight: bold;
}
.sublabel {
  font-family: Roboto, sans-serif;
}
.img-hospital {
  width: 10rem;
  height: 4rem;
}
.warning {
  width: auto;
  color: #0ea08a;
  font-family: Roboto, sans-serif;
  font-size: 14pt;
  border-radius: 15px;
  border: 1px solid #0ea08a;
  line-height: 30pt;
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
.menu-links {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #0ea08a;
  width: fit-content;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3 ease-in-out;
  border-radius: 0.5rem;
  text-align: center;
}
.menu-links a {
  display: block;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3 ease-in-out;
}
.menu-links li {
  list-style: none;
}
.menu-links.open {
  max-height: 50rem;
}
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 100vh">
    <div class="row">
      <div class="text-center p-5">
        <div class="row">
          <div class="col">
            <img alt="JunTOs logo" class="juntos-logo" src="../assets/juntos_logo.png" />
          </div>
          <div class="col">
            <h1 class="lead fw-bold" style="font-size: 50pt">JunTOs</h1>
            <p class="lead">Bem-vindo ao seu game interativo!</p>
            <RouterLink to="/formularios">
              <button class="btn green-button">Começar</button>
            </RouterLink>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<style scoped>
.green-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
.green-button:hover {
  background-color: #45a049;
}
.teenagers-img {
  width: 100vh;
  height: 100vh;
  box-shadow: 1px 1px 1px rgba(128, 128, 128, 0.372);
}
.juntos-logo {
  width: 150pt;
  height: 150pt;
}
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #45a049;
}
</style>

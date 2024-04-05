<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-md-6 text-center p-5">
      <div class="row">
        <div class="col">
          <img alt="JunTOs logo" class="juntos-logo" src="../assets/juntos_logo.png" />
        </div>
        <div class="col">
          <h1 class="lead fw-bold" style="font-size: 50pt">JunTOs</h1>
          <p class="lead">Bem-vindo ao seu game interativo!</p>
          <RouterLink to="/comecar"><button class="green-button">Começar</button></RouterLink>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <img alt="Jovens rindo" class="teenagers-img" src="../assets/teenagers.jpeg" />
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

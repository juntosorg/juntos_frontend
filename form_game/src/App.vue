<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="JunTOs logo" class="logo" src="@/assets/juntos_logo.png" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="JunTOs" />
      <nav>
        <RouterLink to="/"><button class="green-button">Começar</button></RouterLink>
      </nav>
    </div>
  </header>
  <aside style="background-color: yellow; width: 100vh; height: 100vh">
    <img alt="JunTOs logo" class="logo" src="@/assets/teenagers.jpeg" width="100%" height="100%" />
  </aside>
  <!-- <RouterView /> -->
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50; /* Green */
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 25px; /* Round corners */
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #45a049; /* Darker green */
}

/* Styling for the green button */
.green-button {
  background-color: #4caf50; /* Green background color */
  border: none; /* No border */
  color: white; /* Text color */
  padding: 10px 20px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline block */
  font-size: 16px; /* Font size */
  border-radius: 10px; /* Rounded corners */
  cursor: pointer; /* Cursor style */
}

/* Hover effect */
.green-button:hover {
  background-color: #45a049; /* Darker green */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

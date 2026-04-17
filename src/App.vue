<script setup lang="ts">
import UseLocalStorage from "./components/composables/vueuse/UseLocalStorage.vue";
</script>

<template>

  <div>
    <nav>
      <router-link to="/">Inicio</router-link>
      |
      <router-link to="/about">Acerca de</router-link>
      |
      <router-link to="/users">Usuarios</router-link>
      |
      <router-link to="/profile">Profile</router-link>
    </nav>

    <router-view />
  </div>
  <UseLocalStorage />
</template>

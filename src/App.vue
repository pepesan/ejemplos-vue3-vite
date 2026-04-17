<script setup lang="ts">
import UseFiles from "./components/composables/vueuse/UseFiles.vue";
import UseDropFiles from "./components/composables/vueuse/UseDropFiles.vue";
import UseFetchPartidos from "./components/composables/vueuse/UseFetchPartidos.vue";
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
</template>

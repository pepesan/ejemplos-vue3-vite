<script setup lang="ts">
import FadeExample from "./components/transitions/FadeExample.vue";
import ListTransition from "./components/transitions/ListTransition.vue";
import BounceExample from "./components/animations/BounceExample.vue";
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
  <FadeExample />
  <ListTransition />
  <BounceExample />
</template>

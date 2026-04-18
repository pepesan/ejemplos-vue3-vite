<template>
  <button @click="mostrar = !mostrar">
    Mostrar / Ocultar
  </button>

  <Transition name="fade">
    <p v-if="mostrar">Hola, soy un texto con transición</p>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const mostrar = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<!-- BotonUnSoloClick.vue -->
<template>
  <div>
    <button @click.once="mostrarMensaje">Haz clic una vez</button>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('')

const mostrarMensaje = () => {
  mensaje.value = 'Solo podías pulsar una vez'
}
</script>
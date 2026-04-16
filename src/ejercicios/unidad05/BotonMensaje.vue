<!-- BotonMensaje.vue -->
<template>
  <div>
    <button @click="mostrarMensaje">Púlsame</button>
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('')

const mostrarMensaje = () => {
  mensaje.value = 'Has pulsado el botón'
}
</script>
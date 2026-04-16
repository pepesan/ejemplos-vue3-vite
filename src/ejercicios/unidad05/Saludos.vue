<!-- Saludos.vue -->
<template>
  <div>
    <button @click="saludar('Ana')">Saludar a Ana</button>
    <button @click="saludar('Luis')">Saludar a Luis</button>
    <button @click="saludar('Marta')">Saludar a Marta</button>

    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('')

const saludar = (nombre) => {
  mensaje.value = `Hola, ${nombre}`
}
</script>
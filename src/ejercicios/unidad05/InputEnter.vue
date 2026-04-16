<!-- InputEnter.vue -->
<template>
  <div>
    <input
        type="text"
        placeholder="Pulsa Enter"
        @keyup.enter="mostrarMensaje"
    />

    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('')

const mostrarMensaje = () => {
  mensaje.value = 'Has pulsado Enter'
}
</script>
<template>
  <div>
    <button data-test="load-btn" @click="loadMessage">
      Cargar mensaje
    </button>

    <p data-test="message">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')

const loadMessage = async () => {
  // simulamos una llamada async
  await Promise.resolve()
  message.value = 'Mensaje cargado'
}
</script>
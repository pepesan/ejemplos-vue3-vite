<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" />
    <button type="submit">Enviar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')

function handleSubmit() {
  console.log('Formulario enviado:', name.value)
}
</script>
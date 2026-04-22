<template>
  <form @submit.prevent="handleSubmit">
    <input
        data-test="input"
        type="text"
        v-model="name"
    />

    <button data-test="submit-btn" type="submit">
      Enviar
    </button>

    <p data-test="result">{{ result }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const result = ref('')

const handleSubmit = () => {
  result.value = `Hola ${name.value}`
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const texto = ref('')

function manejarInput(event: Event) {
  const input = event.target as HTMLInputElement
  texto.value = input.value
}
</script>

<template>
  <div>
    <input type="text" @input="manejarInput" placeholder="Escribe algo" />

    <p>Has escrito: {{ texto }}</p>
  </div>
</template>
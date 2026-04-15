<template>
  <div>
    <p><strong>Nombre:</strong> {{ nombre }}</p>
    <p><strong>Apellidos:</strong> {{ apellidos }}</p>
    <p><strong>Nombre completo:</strong> {{ nombreCompleto }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const nombre = ref<string>('Carlos')
const apellidos = ref<string>('Martínez Pérez')

const nombreCompleto = computed<string>(() => {
  return `${nombre.value} ${apellidos.value}`
})
</script>
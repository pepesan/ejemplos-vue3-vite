<template>
  <p>{{ mensaje }}</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mensaje = ref<string>('Cargando componente...')

onMounted(() => {
  mensaje.value = 'Componente cargado'
})
</script>
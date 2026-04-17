<template>
  <div>
    <h2>Componente Prueba</h2>
    <p>Contador: {{ count }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '../../composables/useCounter'

const { count, increment } = useCounter()
</script>
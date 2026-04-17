<script setup lang="ts">
import { useDouble } from '../composables/useDouble'

const { number, doubled } = useDouble(8)
</script>

<template>
  <div>
    <h2>Componente B</h2>
    <p>Número: {{ number }}</p>
    <p>Doble: {{ doubled }}</p>
  </div>
</template>
<script setup lang="ts">
import { useDouble } from '../composables/useDouble'

const { number, doubled } = useDouble(5)
</script>

<template>
  <p>Número: {{ number }}</p>
  <p>Doble: {{ doubled }}</p>
</template>
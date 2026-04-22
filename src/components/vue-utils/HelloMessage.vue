<template>
  <section>
    <h1 data-test="title">Hola {{ name }}</h1>
    <p data-test="description">Bienvenido al componente de prueba</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
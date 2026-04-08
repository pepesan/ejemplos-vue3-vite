<script setup lang="ts">
defineProps<{
  nombre: string
}>();
</script>

<template>
  <p>Hola {{ nombre }}</p>
</template>

<style scoped>

</style>
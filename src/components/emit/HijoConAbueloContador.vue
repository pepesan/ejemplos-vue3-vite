<script setup lang="ts">
const emit = defineEmits<{
  (e: 'incrementar'): void
}>()

function manejarClick() {
  emit('incrementar')
}
</script>

<template>
  <button @click="manejarClick">
    Incrementar
  </button>
</template>

<style scoped>
</style>
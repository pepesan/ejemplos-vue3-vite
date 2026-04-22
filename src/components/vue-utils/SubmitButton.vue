<template>
  <button data-test="submit-btn" @click="handleClick">
    Guardar
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'submit', value: string): void
}>()

const handleClick = () => {
  emit('submit', 'datos-enviados')
}
</script>
<template>
  <button @click="emitirClick">
    {{ texto }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  texto: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'accion'): void
}>()

const emitirClick = (): void => {
  emit('accion')
}
</script>
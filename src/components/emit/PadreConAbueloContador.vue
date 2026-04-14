<script setup lang="ts">
import { ref } from 'vue'
import HijoConAbueloContador from './HijoConAbueloContador.vue'

const contador = ref(0)
const emit = defineEmits<{
  (e: 'incrementarPadre'): void
}>()
function actualizarContador() {
  emit('incrementarPadre')
  contador.value++
}


</script>

<template>
  <p>Contador: {{ contador }}</p>
  <HijoConAbueloContador @incrementar="actualizarContador" />
</template>
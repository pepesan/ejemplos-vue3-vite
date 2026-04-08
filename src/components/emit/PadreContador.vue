<script setup lang="ts">
import { ref } from 'vue'
import HijoContador from './HijoContador.vue'

const contador = ref(0)

function actualizarContador() {
  contador.value++
}
</script>

<template>
  <p>Contador: {{ contador }}</p>
  <HijoContador @incrementar="actualizarContador" />
</template>
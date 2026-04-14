<script setup lang="ts">
import { ref } from 'vue'
import PadreConAbueloContador from './PadreConAbueloContador.vue'
const contador = ref(0)
function actualizarContadorAbuelo() {
  contador.value++
}
</script>
<template>
  <h2> Componente abuelo</h2>
  <p>Contador: {{ contador }}</p>
  <PadreConAbueloContador @incrementarPadre="actualizarContadorAbuelo" />
</template>
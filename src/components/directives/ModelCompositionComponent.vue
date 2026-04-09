<template>
  <div>
    <input id="campo" type="text" v-model="valor" />
    <p id="mensaje">El valor actual es: {{ valor }}</p>
    <button id="inc" @click="mostrarValor">Mostrar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const valor = ref('')

function mostrarValor() {
  console.log(valor.value)
}
</script>
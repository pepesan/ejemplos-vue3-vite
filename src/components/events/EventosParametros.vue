<script setup>
import { ref } from 'vue'

const contador = ref(0)

function sumar(cantidad) {
  contador.value += cantidad
}
</script>

<template>
  <div>
    <p>Contador: {{ contador }}</p>

    <button @click="sumar(1)">+1</button>
    <button @click="sumar(5)">+5</button>
    <button @click="sumar(10)">+10</button>
  </div>
</template>
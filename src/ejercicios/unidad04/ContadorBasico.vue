<template>
  <div>
    <h2>Contador: {{ contador }}</h2>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contador = ref<number>(0)

const incrementar = (): void => {
  contador.value++
}

const decrementar = (): void => {
  contador.value--
}
</script>
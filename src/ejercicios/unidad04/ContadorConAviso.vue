<template>
  <div>
    <h2>Valor: {{ contador }}</h2>
    <button @click="incrementar">Sumar</button>
    <button @click="decrementar">Restar</button>

    <p v-if="contador > 10">El contador ha superado 10</p>
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
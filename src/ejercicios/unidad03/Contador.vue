<template>
  <div>
    <h2>Número: {{ contador }}</h2>

    <button @click="sumar">Sumar</button>
    <button @click="restar">Restar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contador = ref<number>(0)

const sumar = (): void => {
  contador.value++
}

const restar = (): void => {
  contador.value--
}
</script>
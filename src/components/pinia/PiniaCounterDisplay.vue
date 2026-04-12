<script setup lang="ts">
import { useCounterStore } from '../../stores/counterStore'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    <h2>Contador global</h2>

    <p>Valor actual: {{ counterStore.count }}</p>
    <p>Doble del valor: {{ counterStore.doubleCount }}</p>

    <button @click="counterStore.increment()">
      Incrementar
    </button>
  </div>
</template>
<template>
  <div>
    <p data-test="count">{{ store.count }}</p>
    <button data-test="inc-btn" @click="store.increment()">
      Incrementar
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from './CounterStore'

const store = useCounterStore()
</script>
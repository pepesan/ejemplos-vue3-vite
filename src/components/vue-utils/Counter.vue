<template>
  <div>
    <p data-test="count">{{ count }}</p>
    <button data-test="inc-btn" @click="increment">
      Incrementar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>
<script setup lang="ts">
import { ref } from 'vue'

const contador = ref(0)

function incrementar() {
  contador.value++
}
</script>

<template>
  <button @click="incrementar">
    Contador: {{ contador }}
  </button>
</template>

<style scoped>

</style>
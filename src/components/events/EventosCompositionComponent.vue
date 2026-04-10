<script setup>
import { ref } from 'vue'

const contador = ref(0)

function incrementar() {
  contador.value++
}

function decrementar() {
  if (contador.value > 0) {
    contador.value--
  }
}
</script>

<template>
  <div class="contenedor">
    <p data-testid="contador">
      Contador: {{ contador }}
    </p>

    <div class="acciones">
      <button data-testid="btn-inc" @click="incrementar">
        Incrementar
      </button>

      <button data-testid="btn-dec" @click="decrementar">
        Decrementar
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
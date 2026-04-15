<script setup>
import { ref } from 'vue'

const activo = ref(false)

function alternarEstado() {
  activo.value = !activo.value
}
</script>

<template>
  <div>
    <p
        :class="{ destacado: activo, destacado2: activo }"
        :style="{ color: activo ? 'green' : 'gray' }"
    >
      Estado visual dinámico
    </p>

    <button @click="alternarEstado">
      Cambiar estado
    </button>
  </div>
</template>

<style scoped>
.destacado {
  font-weight: bold;
  font-size: 1.1rem;
}
.destacado2 {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
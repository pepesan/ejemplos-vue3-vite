<script setup>
import { ref } from 'vue'

const contenidoVisible = ref(false)

function alternarVisibilidad() {
  contenidoVisible.value = !contenidoVisible.value
}
</script>

<template>
  <div>
    <button @click="alternarVisibilidad">
      {{ contenidoVisible ? 'Ocultar' : 'Mostrar' }}
    </button>

    <p v-if="contenidoVisible">
      El contenido está visible
    </p>
  </div>
</template>
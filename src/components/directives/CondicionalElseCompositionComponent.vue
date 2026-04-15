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
    <!--h2>No puede haber nada en medio, debem de ser adyacentes para asociar el if y el else</h2-->
    <p v-else>
      El contenido está oculto
    </p>
  </div>
</template>
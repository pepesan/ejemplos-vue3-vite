<script setup>
import { ref } from 'vue'

const estado = ref('cargando')

function cambiarEstado(nuevoEstado) {
  estado.value = nuevoEstado
}
</script>

<template>
  <div>
    <button data-testid="btn-cargando" @click="cambiarEstado('cargando')">Cargando</button>
    <button data-testid="btn-error" @click="cambiarEstado('error')">Error</button>
    <button data-testid="btn-ok" @click="cambiarEstado('ok')">OK</button>

    <p v-if="estado === 'cargando'">
      Cargando datos...
    </p>

    <p v-else-if="estado === 'error'">
      Ha ocurrido un error
    </p>

    <p v-else>
      Datos cargados correctamente
    </p>
  </div>
</template>
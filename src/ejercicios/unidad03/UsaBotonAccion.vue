<template>
  <div>
    <BotonAccion texto="Pulsa aquí" @accion="mostrarMensaje" />
    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BotonAccion from './BotonAccion.vue'

const mensaje = ref<string>('')

const mostrarMensaje = (): void => {
  mensaje.value = 'Has pulsado el botón'
}
</script>
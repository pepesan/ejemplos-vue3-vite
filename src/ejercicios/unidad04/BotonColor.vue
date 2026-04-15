<template>
  <div>
    <button
        :class="['boton', { activo: pulsado }]"
        @click="cambiarEstado"
    >
      {{ pulsado ? 'Botón activo' : 'Botón inactivo' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pulsado = ref<boolean>(false)

const cambiarEstado = (): void => {
  pulsado.value = !pulsado.value
}
</script>

<style scoped>
.boton {
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  background-color: gray;
  color: white;
  border-radius: 6px;
}

.activo {
  background-color: green;
}
</style>
<script setup lang="ts">
const emit = defineEmits<{
  (e: 'agregarProducto', nombre: string, precio: number): void
  (e: 'mostrarMensaje'): void
}>()

function agregar() {
  emit('agregarProducto', 'Portátil', 899)
}

function mostrar() {
  emit('mostrarMensaje')
}
</script>

<template>
  <div>
    <button @click="agregar">
      Agregar producto
    </button>

    <button @click="mostrar">
      Mostrar mensaje
    </button>
  </div>
</template>

<style scoped>
</style>
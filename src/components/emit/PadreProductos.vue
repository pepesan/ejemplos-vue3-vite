<script setup lang="ts">
import { ref } from 'vue'
import HijoProductos from './HijoProductos.vue'

const nombreProducto = ref('')
const precioProducto = ref(0)
const mensaje = ref('')

function manejarAgregarProducto(nombre: string, precio: number) {
  nombreProducto.value = nombre
  precioProducto.value = precio
}

function manejarMensaje() {
  mensaje.value = 'Evento sin parámetros recibido'
}
</script>

<template>
  <h2>Ejemplo con parámetros</h2>

  <HijoProductos
      @agregarProducto="manejarAgregarProducto"
      @mostrarMensaje="manejarMensaje"
  />

  <p v-if="nombreProducto">
    Producto: {{ nombreProducto }}
  </p>

  <p v-if="precioProducto">
    Precio: {{ precioProducto }} €
  </p>

  <p v-if="mensaje">
    {{ mensaje }}
  </p>
</template>

<style scoped>
</style>
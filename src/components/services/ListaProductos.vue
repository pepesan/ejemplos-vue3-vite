<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { obtenerProductos } from './productoService'

interface Producto {
  id: number
  nombre: string
}

const productos = ref<Producto[]>([])

onMounted(async () => {
  productos.value = await obtenerProductos()
})
</script>

<template>
  <ul>
    <li v-for="producto in productos" :key="producto.id">
      {{ producto.nombre }}
    </li>
  </ul>
</template>
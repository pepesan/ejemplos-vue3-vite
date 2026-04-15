<template>
  <div>
    <input v-model="textoBusqueda" type="text" placeholder="Buscar..." />

    <ul>
      <li v-for="item in elementosFiltrados" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const textoBusqueda = ref<string>('')

const elementos = ref<string[]>([
  'Manzana',
  'Pera',
  'Plátano',
  'Naranja',
  'Sandía'
])

const elementosFiltrados = computed<string[]>(() => {
  return elementos.value.filter((elemento) =>
      elemento.toLowerCase().includes(textoBusqueda.value.toLowerCase())
  )
})
</script>
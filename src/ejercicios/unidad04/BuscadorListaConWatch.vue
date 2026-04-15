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
import { ref, watch } from 'vue'

const textoBusqueda = ref<string>('')

const elementos = ref<string[]>([
  'Manzana',
  'Pera',
  'Plátano',
  'Naranja',
  'Sandía'
])

const elementosFiltrados = ref<string[]>([...elementos.value])

watch(textoBusqueda, (nuevoTexto) => {
  elementosFiltrados.value = elementos.value.filter((elemento) =>
      elemento.toLowerCase().includes(nuevoTexto.toLowerCase())
  )
})
</script>
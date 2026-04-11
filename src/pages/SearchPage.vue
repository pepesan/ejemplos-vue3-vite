<template>
  <section>
    <h1>Resultados de búsqueda</h1>

    <p>
      Término buscado:
      <strong>{{ searchTerm }}</strong>
    </p>

    <div v-if="results.length > 0">
      <h2>Resultados encontrados</h2>

      <ul>
        <li v-for="item in results" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>

    <p v-else>
      No hay resultados para esta búsqueda.
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Item {
  id: number
  title: string
}

const route = useRoute()

const items: Item[] = [
  { id: 1, title: 'Introducción a Vue' },
  { id: 2, title: 'Vue Router básico' },
  { id: 3, title: 'TypeScript con Vue' },
  { id: 4, title: 'Componentes reutilizables' }
]

const searchTerm = computed(() => {
  const value = route.query.q

  return typeof value === 'string'
      ? value.toLowerCase()
      : ''
})

const results = computed(() => {
  return items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.value)
  )
})
</script>
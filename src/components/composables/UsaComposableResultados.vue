<script setup lang="ts">
import { onMounted } from 'vue'
import { useResultados } from '../../composables/useResultados'

const { resultados, loading, error, fetchResultados } = useResultados()

onMounted(() => {
  fetchResultados()
})
</script>

<template>
  <section>
    <p v-if="loading">Cargando resultados...</p>
    <p v-else-if="error">{{ error }}</p>

    <ul v-else>
      <li
          v-for="partido in resultados"
          :key="partido.nombre"
          class="partido-item"
      >
        <img
            :src="partido.imagenUrl"
            :alt="`Logo de ${partido.nombre}`"
            class="partido-logo"
        />

        <div>
          <strong>{{ partido.nombre }}</strong>
          <p>{{ partido.dipu }} diputados</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.partido-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.partido-logo {
  width: 80px;
  height: 80px;
  max-width: 80px;
  max-height: 80px;
  object-fit: contain;
}
</style>
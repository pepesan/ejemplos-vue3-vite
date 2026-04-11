<template>
  <div v-if="isLoading">Cargando resultados...</div>
  <div v-else-if="error">Error al cargar los datos: {{ error }}</div>
  <table v-else>
    <thead>
    <tr>
      <td>Logo</td>
      <td>Nombre</td>
      <td>Diputados</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="partido in partidos" :key="partido.nombre">
      <td>
        <img
            class="image-50x50"
            :src="`${apiImageBaseUrl}/${partido.imagen}`"
            :alt="partido.nombre"
        />
      </td>
      <td>{{ partido.nombre }}</td>
      <td>{{ partido.dipu }} diputados</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Partido {
  nombre: string
  imagen: string
  dipu: number
}

const apiResultsUrl = import.meta.env.VITE_RESULTS_URL
const apiImageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL

const partidos = ref<Partido[]>([])
const isLoading = ref<boolean>(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const response = await axios.get<Partido[]>(apiResultsUrl)
    partidos.value = response.data
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      error.value = err.message
    } else {
      error.value = 'Network Error'
    }
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.image-50x50 {
  width: 50px;
  height: 50px;
}
</style>
<template>
  <div>
    <h2>Lista de alumnos</h2>
    <ul>
      <li v-for="alumno in alumnos" :key="alumno.id">
        {{ alumno.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Alumno {
  id: number
  nombre: string
}

const alumnos = ref<Alumno[]>([
  { id: 1, nombre: 'Lucía' },
  { id: 2, nombre: 'Javier' },
  { id: 3, nombre: 'Marta' },
  { id: 4, nombre: 'Sergio' }
])
</script>
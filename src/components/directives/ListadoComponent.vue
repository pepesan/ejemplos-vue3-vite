<script setup>
import { ref } from 'vue'

const tareas = ref([
  'Aprender Vue',
  'Practicar componentes',
  'Crear un proyecto'
])
</script>

<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      {{ index + 1 }} - {{ tarea }}
    </li>
  </ul>
</template>
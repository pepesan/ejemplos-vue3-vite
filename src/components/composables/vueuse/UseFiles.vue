<script setup>
import { useFileDialog } from '@vueuse/core'

const { files, open } = useFileDialog({
  multiple: true
})
</script>

<template>
  <div>
    <h2>Selector de archivos</h2>

    <button @click="open">
      Seleccionar archivos
    </button>

    <ul v-if="files && files.length">
      <li v-for="file in files" :key="file.name">
        <strong>Nombre:</strong> {{ file.name }} <br>
        <strong>Tipo:</strong> {{ file.type || 'Desconocido' }} <br>
        <strong>Tamaño:</strong> {{ (file.size / 1024).toFixed(2) }} KB
      </li>
    </ul>
  </div>
</template>
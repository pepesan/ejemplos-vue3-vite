<script setup>
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

const dropZoneRef = ref(null)
const files = ref([])

useDropZone(dropZoneRef, {
  onDrop: (droppedFiles) => {
    files.value = droppedFiles
  }
})
</script>

<template>
  <div>
    <h2>Arrastra tus archivos</h2>

    <div
        ref="dropZoneRef"
        style="border: 2px dashed #ccc; padding: 20px; text-align: center;"
    >
      Arrastra aquí los archivos
    </div>

    <ul v-if="files.length">
      <li v-for="file in files" :key="file.name">
        {{ file.name }} ({{ file.type || 'desconocido' }})
      </li>
    </ul>
  </div>
</template>
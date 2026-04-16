<!-- CambiarColor.vue -->
<template>
  <div>
    <button @click="cambiarColor">Cambiar color</button>

    <div
        :style="{
        width: '200px',
        height: '100px',
        backgroundColor: color
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('lightgray')

const cambiarColor = () => {
  color.value = color.value === 'lightgray' ? 'lightblue' : 'lightgreen'
}
</script>
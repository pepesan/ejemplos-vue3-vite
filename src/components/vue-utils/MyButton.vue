<template>
  <button id="mi-boton" @click="handleClick">
    Haz click
  </button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Botón pulsado')
}
</script>
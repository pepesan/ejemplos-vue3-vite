<template>
  <div>
    <h2>Datos del usuario</h2>
    <p><strong>Nombre:</strong> {{ nombre }}</p>
    <p><strong>Edad:</strong> {{ edad }}</p>
    <p><strong>Ciudad:</strong> {{ ciudad }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  nombre: string
  edad: number
  ciudad: string
}

defineProps<Props>()
</script>
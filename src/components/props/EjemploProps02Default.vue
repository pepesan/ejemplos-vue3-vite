<script setup lang="ts">
withDefaults(
    defineProps<{
        nombre?: string
      }>()
    ,
    {
      nombre: 'Invitado'
    }
)
</script>

<template>
  <p>Hola {{ nombre }}</p>
</template>

<style scoped>

</style>
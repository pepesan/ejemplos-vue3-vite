<template>
  <CardLayout>
    <template #titulo>
      <h2>Mi tarjeta</h2>
    </template>

    <template #contenido>
      <p>Este es el contenido principal</p>
    </template>

    <template #acciones>
      <button>Aceptar</button>
    </template>
  </CardLayout>
</template>

<script setup>
import CardLayout from "./CardLayout.vue";
</script>
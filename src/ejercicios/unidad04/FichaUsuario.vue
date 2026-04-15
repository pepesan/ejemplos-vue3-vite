<template>
  <div>
    <h2>Ficha de usuario</h2>
    <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
    <p><strong>Correo:</strong> {{ usuario.correo }}</p>
    <p><strong>Ciudad:</strong> {{ usuario.ciudad }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Usuario {
  nombre: string
  correo: string
  ciudad: string
}

const usuario = reactive<Usuario>({
  nombre: 'Ana López',
  correo: 'ana@email.com',
  ciudad: 'Valencia'
})
</script>
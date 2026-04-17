<script setup>
import { useSessionStorage } from '@vueuse/core'

// clave: 'token', valor inicial vacío
const token = useSessionStorage('token', '')
</script>

<template>
  <div>
    <h2>Sesión</h2>

    <input
        v-model="token"
        placeholder="Introduce tu token"
    />

    <p v-if="token">
      Token activo: {{ token }}
    </p>
  </div>
</template>
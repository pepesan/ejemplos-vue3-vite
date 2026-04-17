<script setup>
import { useLocalStorage } from '@vueuse/core'

// clave: 'username' en localStorage, valor inicial vacío
const username = useLocalStorage('username', '')
</script>

<template>
  <div>
    <h2>Perfil de usuario</h2>

    <input
        v-model="username"
        placeholder="Escribe tu nombre"
    />

    <p v-if="username">
      Hola, {{ username }}
    </p>
  </div>
</template>
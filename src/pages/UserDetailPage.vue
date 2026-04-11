<template>
  <section v-if="user">
    <h1>Detalle de usuario</h1>

    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Nombre:</strong> {{ user.name }}</p>


  </section>

  <section v-else>
    <h1>Usuario no encontrado</h1>

  </section>
  <router-link to="/users">← Volver al listado</router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface User {
  id: number
  name: string
}

const route = useRoute()

const users: User[] = [
  { id: 1, name: 'Juan Pérez' },
  { id: 2, name: 'Ana López' },
  { id: 3, name: 'Carlos Ruiz' }
]

const user = computed(() => {
  const userId = Number(route.params.id)

  return users.find(user => user.id === userId)
})
</script>
<template>
  <section>
    <h1>Listado de usuarios</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/users/${user.id}`">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number
  name: string
}

const users = ref<User[]>([
  { id: 1, name: 'Juan Pérez' },
  { id: 2, name: 'Ana López' },
  { id: 3, name: 'Carlos Ruiz' }
])
</script>
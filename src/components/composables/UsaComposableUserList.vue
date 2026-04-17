<template>
  <div>
    <h2>Usuarios</h2>

    <button @click="toggleFilter">
      Mostrar: {{ showActive ? 'Activos' : 'Todos' }}
    </button>

    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from '../../composables/useUsers'

const { filteredUsers, showActive, toggleFilter } = useUsers()
</script>
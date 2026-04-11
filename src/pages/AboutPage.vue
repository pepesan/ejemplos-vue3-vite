<template>
  <section>
    <h1>Acerca de</h1>

    <p>
      Esta página muestra ejemplos de navegación programática con Vue Router.
    </p>

    <div>
      <button @click="goHome">
        Ir al inicio
      </button>

      <button @click="goToUsers">
        Ver listado de usuarios
      </button>

      <button @click="goToUserDetail(2)">
        Ir al detalle del usuario 2
      </button>

      <button @click="goToSearch('vue')">
        Buscar "vue"
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = (): void => {
  router.push({ name: 'home' })
}

const goToUsers = (): void => {
  router.push({ name: 'users' })
}

const goToUserDetail = (id: number): void => {
  router.push({
    name: 'user-detail',
    params: { id }
  })
}

const goToSearch = (term: string): void => {
  router.push({
    name: 'search',
    query: {
      q: term
    }
  })
}
</script>
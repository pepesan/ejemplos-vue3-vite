<template>
  <section>
    <h1>Mi perfil</h1>

    <p>Área privada del usuario.</p>

    <nav>
      <router-link :to="{ name: 'profile-settings' }">
        Configuración
      </router-link>
      |
      <router-link :to="{ name: 'profile-orders' }">
        Pedidos
      </router-link>
    </nav>

    <hr>

    <router-view />
  </section>
</template>

<script setup lang="ts">
</script>
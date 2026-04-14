<template>
  <h4> Componente padre</h4>
  <UserList v-slot="{ user }">
    <p>{{ user.name }} - {{ user.age }} años</p>
  </UserList>
</template>

<script setup>
import UserList from "./UserList.vue";
</script>
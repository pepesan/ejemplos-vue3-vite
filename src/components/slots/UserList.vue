<template>
  <h4> Componente hijo</h4>
  <ul>
    <li v-for="user in users" :key="user.id">
      <span> usuario</span>
      <slot :user="user"></slot>
    </li>
  </ul>
</template>

<script setup>
const users = [
  { id: 1, name: "Ana", age: 25 },
  { id: 2, name: "Luis", age: 30 }
];
</script>
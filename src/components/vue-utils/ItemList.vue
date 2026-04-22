<template>
  <div>
    <h2 data-test="title">Lista de items</h2>

    <ul>
      <li v-for="item in items" :key="item" class="item">
        {{ item }}
      </li>
    </ul>

    <button data-test="add-btn">Añadir</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>
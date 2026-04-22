<template>
  <div>
    <h1 data-test="title">Padre</h1>
    <HeavyChild />
  </div>
</template>

<script setup lang="ts">
import HeavyChild from './HeavyChild.vue'
</script>
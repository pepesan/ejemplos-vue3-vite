<script setup>
import { ref } from 'vue'

const mensaje = ref('Hola Vue')
const url = ref('https://vuejs.org')
</script>

<template>
  <div>
    <p>{{ mensaje }}</p>
    <a :href="url">Ir a la web oficial</a>
  </div>
</template>
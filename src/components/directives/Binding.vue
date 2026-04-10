<script setup>
import { ref } from 'vue'

const url = ref('https://vuejs.org')
const texto = ref('Ir a la web oficial de Vue')
</script>

<template>
  <div>
    <a :href="url">{{ texto }}</a>
  </div>
</template>
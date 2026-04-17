<script setup lang="ts">
import { useMessage } from '../composables/useMessage'

const { message, changeMessage } = useMessage()
</script>

<template>
  <p>{{ message }}</p>
  <button @click="changeMessage">Cambiar mensaje</button>
</template>
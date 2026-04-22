<template>
  <p data-test="greeting">Hola {{ user }}</p>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const user = inject<string>('user', 'Invitado')
</script>
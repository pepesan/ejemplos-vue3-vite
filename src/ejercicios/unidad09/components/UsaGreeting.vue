<script setup lang="ts">
import { useGreeting } from '../composables/useGreeting'

const { greeting } = useGreeting()
</script>

<template>
  <p>{{ greeting() }}</p>
</template>
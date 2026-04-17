<script setup lang="ts">
import { useMessage } from '../composables/useMessage'

const { message } = useMessage()
</script>

<template>
  <p>{{ message }}</p>
</template>
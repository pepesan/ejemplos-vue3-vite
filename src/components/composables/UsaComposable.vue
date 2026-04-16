<script setup lang="ts">
import { ref } from 'vue'
import { useFormat } from '../../composables/useFormat'

const { currency, date } = useFormat()

const price = ref<number>(1234.5)
const createdAt = ref<string>('2026-04-16')
</script>

<template>
  <p>Precio: {{ currency(price) }}</p>
  <p>Fecha: {{ date(createdAt) }}</p>
</template>
<template>
  <div>
    <ChildButton @clicked="handleClick" />
    <p data-test="status">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildButton from './ChildButton.vue'

const message = ref('No pulsado')

const handleClick = () => {
  message.value = 'Pulsado'
}
</script>
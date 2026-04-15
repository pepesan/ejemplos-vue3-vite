<template>
  <div>
    <button @click="toggleInformacion">
      {{ visible ? 'Ocultar información' : 'Mostrar información' }}
    </button>

    <div v-if="visible">
      <h3>Información adicional</h3>
      <p>Este bloque se puede mostrar u ocultar usando una directiva condicional.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref<boolean>(false)

const toggleInformacion = (): void => {
  visible.value = !visible.value
}
</script>
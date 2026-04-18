<template>
  <button @click="animar">
    Activar animación
  </button>

  <div :class="{ bounce: activo }" class="caja">
    Animación
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activo = ref(false)

const animar = () => {
  activo.value = false

  requestAnimationFrame(() => {
    activo.value = true
  })
}
</script>

<style scoped>
.caja {
  width: 100px;
  height: 100px;
  background-color: #42b883;
  margin-top: 20px;
}

.bounce {
  animation: bounce 0.6s;
}

@keyframes bounce {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-30px); }
  60%  { transform: translateY(10px); }
  100% { transform: translateY(0); }
}
</style>
<template>
  <div>
    <button @click="añadir">Añadir elemento</button>
    <button @click="eliminar">Eliminar elemento</button>

    <TransitionGroup name="list" tag="ul">
      <li v-for="item in lista" :key="item">
        Elemento {{ item }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let contador = 3
const lista = ref([1, 2, 3])

const añadir = () => {
  lista.value.push(++contador)
}

const eliminar = () => {
  lista.value.pop()
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

</style>
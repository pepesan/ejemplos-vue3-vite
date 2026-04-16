<!-- ListaEliminar.vue -->
<template>
  <div>
    <h2>Lista de nombres</h2>

    <ul>
      <li v-for="(nombre, index) in nombres" :key="index">
        {{ nombre }}
        <button @click="eliminarNombre(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombres = ref(['Ana', 'Luis', 'Marta', 'Pedro'])

const eliminarNombre = (index) => {
  nombres.value.splice(index, 1)
}
</script>
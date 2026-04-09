<script setup>
import { ref, computed } from 'vue'

// datos reactivos
const nombre = ref('Ana')
const apellido = ref('García')

// computed: valor derivado
const nombreCompleto = computed(() => {
  return nombre.value + ' ' + apellido.value
})

// función para modificar datos
function cambiarNombre() {
  nombre.value = 'Luis'
}
</script>

<template>
  <div>
    <p>Nombre: {{ nombre }}</p>
    <p>Apellido: {{ apellido }}</p>

    <p>Nombre completo: {{ nombreCompleto }}</p>

    <button @click="cambiarNombre">Cambiar nombre</button>
  </div>
</template>
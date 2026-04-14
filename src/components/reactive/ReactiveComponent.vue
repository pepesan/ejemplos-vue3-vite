<script setup>
import { ref, reactive } from 'vue'

// ref: valor primitivo reactivo
const contador = ref(0)

// reactive: objeto reactivo
const usuario = reactive({
  nombre: 'Ana',
  edad: 25
})

// función que modifica los datos
function incrementar() {
  contador.value++
}

function cumplirAnios() {
  usuario.edad++
}
function cambiarNombre() {
  usuario.nombre = 'Marta'
}
</script>

<template>
  <div>
    <h2>Contador: {{ contador }}</h2>
    <button @click="incrementar">Incrementar</button>

    <h2>Usuario: {{ usuario.nombre }} ({{ usuario.edad }} años)</h2>
    <button @click="cumplirAnios">Cumplir años</button>
    <button @click="cambiarNombre">Cambiar nombre</button>
  </div>
</template>

<style scoped>

</style>
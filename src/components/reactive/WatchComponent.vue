<script setup>
import { ref, watch } from 'vue'

// dato reactivo
const contador = ref(0)

// watch: reacciona a cambios
watch(contador, (nuevoValor, valorAnterior) => {
  console.log(`El contador ha cambiado de ${valorAnterior} a ${nuevoValor}`)
})

// función que modifica el contador
function incrementar() {
  contador.value++
}
</script>

<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>
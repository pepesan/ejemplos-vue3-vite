<template>
  <div class="tabla-usuarios">
    <slot name="header" :total="usuarios.length">
      <h2>Usuarios ({{ usuarios.length }})</h2>
    </slot>

    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        <slot name="fila" :usuario="usuario">
          {{ usuario.nombre }} - {{ usuario.email }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const usuarios = ref([
  { id: 1, nombre: 'Ana', email: 'ana@email.com' },
  { id: 2, nombre: 'Luis', email: 'luis@email.com' },
  { id: 3, nombre: 'Marta', email: 'marta@email.com' }
])
</script>

<style scoped>
.tabla-usuarios {
  padding: 16px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}
</style>
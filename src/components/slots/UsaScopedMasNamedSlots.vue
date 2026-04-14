<script setup>
import ScopedMasNamedSlots from "./ScopedMasNamedSlots.vue";
</script>
<template>
  <main>
    <ScopedMasNamedSlots>
      <template #header="{ total }">
        <h1>Lista personalizada ({{ total }})</h1>
      </template>

      <template #fila="{ usuario }">
        <div class="fila-custom">
          <strong>{{ usuario.nombre }}</strong>
          <span> — {{ usuario.email }}</span>
        </div>
      </template>
    </ScopedMasNamedSlots>
  </main>
</template>
<style scoped>
main {
  padding: 24px;
}

.fila-custom {
  padding: 6px 0;
}
</style>

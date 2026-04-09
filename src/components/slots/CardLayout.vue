<template>
  <div class="card">
    <header>
      <slot name="titulo"></slot>
    </header>

    <section>
      <slot name="contenido"></slot>
    </section>

    <footer>
      <slot name="acciones"></slot>
    </footer>
  </div>
</template>

<script setup>
</script>
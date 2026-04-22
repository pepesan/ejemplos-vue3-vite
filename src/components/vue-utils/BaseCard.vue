<template>
  <section class="card">
    <header data-test="card-header">
      <slot name="header" />
    </header>

    <div data-test="card-body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
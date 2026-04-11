<template>
  <section>
    <h2>Ejemplo de modificadores</h2>

    <div class="card" @click="outerClicks++">
      <p>Clicks en la caja exterior: {{ outerClicks }}</p>

      <button class="stop-btn" @click.stop="innerClicks++">
        Botón con .stop
      </button>
      <p>Clicks en el botón interior: {{ innerClicks }}</p>
    </div>

    <button class="once-btn" @click.once="onceClicks++">
      Botón con .once
    </button>
    <p>Clicks válidos en .once: {{ onceClicks }}</p>

    <div class="self-box" @click.self="selfClicks++">
      <span class="self-text">Texto dentro de la caja del div</span>
    </div>
    <p>Clicks directos en la caja (.self): {{ selfClicks }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const outerClicks = ref(0)
const innerClicks = ref(0)
const onceClicks = ref(0)
const selfClicks = ref(0)
</script>
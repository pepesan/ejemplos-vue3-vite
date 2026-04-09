<script setup lang="ts">
import vRedBackground from '../../../src/directives/v-red-background'

// registro local (nombre → v-red-background)
const vRedBackgroundDirective = vRedBackground
import vYellowBackground from '../../../src/directives/v-yellow-background'

// registro local (nombre → v-yellow-background)
const vYellowBackgroundDirective = vYellowBackground
</script>

<template>
  <div>
    <div id="amarillo" v-yellow-background>
      Este div tiene un fondo amarillo.
    </div>

    <div id="rojo" v-red-background>
      Este div tiene un fondo rojo.
    </div>
  </div>
</template>
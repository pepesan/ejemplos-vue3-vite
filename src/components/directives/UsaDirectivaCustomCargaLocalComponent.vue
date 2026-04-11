<script setup lang="ts">
import vRedBackground from '../../../src/directives/v-red-background'

import vYellowBackground from '../../../src/directives/v-yellow-background'

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
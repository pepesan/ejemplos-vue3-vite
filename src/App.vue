<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import PrimerComponente from "./components/PrimerComponente.vue";
import EjemploProps01 from "./components/props/EjemploProps01.vue";
import EjemploProps02Default from "./components/props/EjemploProps02Default.vue";
</script>

<template>
  <!--PrimerComponente/-->
  <EjemploProps01 nombre="Juan"/>
  <EjemploProps01/>
  <EjemploProps02Default/>
  <EjemploProps02Default nombre="Patricia"/>
</template>

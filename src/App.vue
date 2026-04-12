<script setup lang="ts">
import PartidosAxiosComponent from "./components/httprequest/PartidosAxiosComponent.vue";
import PostAxiosFormComponent from "./components/httprequest/PostAxiosFormComponent.vue";
import PartidosAxiosEnvVariableComponent from "./components/httprequest/PartidosAxiosEnvVariableComponent.vue";
import PiniaCounterDisplay from "./components/pinia/PiniaCounterDisplay.vue";
</script>

<template>
  <!--PrimerComponente/>
  <EjemploProps01 nombre="Juan"/>
  <EjemploProps01/>
  <EjemploProps02Default/>
  <EjemploProps02Default nombre="Patricia"/>
  <PadreContador/>
  <UsaSlotCompositionComponent/>
  <UsaCardLayout/>
  <UsaUserList/>
  <CicloVidaDemo/>
  <ReactiveComponent/>
  <ComputedComponent/>
  <WatchComponent/>
  <DataBinding/>
  <CondicionalCompositionComponent/>
  <CondicionalElseCompositionComponent/>
  <CondicionalComplexComponent/>
  <ListadoComponent/>
  <LlamaListadoCompositionComponent/>
  <ModelCompositionComponent/>
  <UsaDirectivaCustomComponent/>
  <UsaDirectivaCustomCargaLocalComponent/>
  <Binding/>
  <EventosCompositionComponent/>
  <EventosParametros/>
  <EventosComoParametro/>
  <DynamicClassesStyles/>
  <EventoPrevent/>
  <EventosModificadores/>
  <FormularioCompositionComponent/>
  <YupValidationCompositionComponent/>
  <YupValidationLoginCompositionComponent/-->
  <div>
    <nav>
      <router-link to="/">Inicio</router-link>
      |
      <router-link to="/about">Acerca de</router-link>
      |
      <router-link to="/users">Usuarios</router-link>
      |
      <router-link to="/profile">Profile</router-link>
    </nav>

    <router-view />
  </div>
  <!--PartidosAxiosComponent/>
  <PostAxiosFormComponent/>
  <PartidosAxiosEnvVariableComponent/-->
  <PiniaCounterDisplay/>
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import PrimerComponente from "./components/PrimerComponente.vue";
// import EjemploProps01 from "./components/props/EjemploProps01.vue";
// import EjemploProps02Default from "./components/props/EjemploProps02Default.vue";
// import PadreContador from "./components/emit/PadreContador.vue";
// import UsaSlotCompositionComponent from "./components/slots/UsaSlotComponent.vue";
// import UsaCardLayout from "./components/slots/UsaCardLayout.vue";
// import UsaUserList from "./components/slots/UsaUserList.vue";
// import CicloVidaDemo from "./components/lifecycle/CicloVidaDemo.vue";
// import ReactiveComponent from "./components/reactive/ReactiveComponent.vue";
// import ComputedComponent from "./components/reactive/ComputedComponent.vue";
// import WatchComponent from "./components/reactive/WatchComponent.vue";
import DataBinding from "./components/data-binding/DataBinding.vue";
import CondicionalCompositionComponent from "./components/directives/CondicionalCompositionComponent.vue";
import CondicionalComplexComponent from "./components/directives/CondicionalComplexComponent.vue";
import CondicionalElseCompositionComponent from "./components/directives/CondicionalElseCompositionComponent.vue";
import ListadoComponent from "./components/directives/ListadoComponent.vue";
import LlamaListadoCompositionComponent from "./components/directives/LlamaListadoCompositionComponent.vue";
import ModelCompositionComponent from "./components/directives/ModelCompositionComponent.vue";
import UsaDirectivaCustomComponent from "./components/directives/UsaDirectivaCustomComponent.vue";
import UsaDirectivaCustomCargaLocalComponent from "./components/directives/UsaDirectivaCustomCargaLocalComponent.vue";
import Binding from "./components/directives/Binding.vue";
import EventosCompositionComponent from "./components/events/EventosCompositionComponent.vue";
import EventosComoParametro from "./components/events/EventosComoParametro.vue";
import EventosParametros from "./components/events/EventosParametros.vue";
import DynamicClassesStyles from "./components/dynamic-styles/DynamicClassesStyles.vue";
import EventoPrevent from "./components/events/EventoPrevent.vue";
import EventosModificadores from "./components/events/EventosModificadores.vue";
import FormularioCompositionComponent from "./components/forms/FormularioCompositionComponent.vue";
import YupValidationCompositionComponent from "./components/forms/YupValidationCompositionComponent.vue";
import YupValidationLoginCompositionComponent from "./components/forms/YupValidationLoginCompositionComponent.vue";
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
</template>

<template>
  <form @submit.prevent="enviar">
    <div>
      <label for="nombre">Nombre</label>
      <input
          id="nombre"
          v-model="state.nombre"
          @blur="v$.nombre.$touch()"
          type="text"
      />

      <p v-if="v$.nombre.$error">
        El nombre es obligatorio
      </p>
    </div>

    <button type="submit">Enviar</button>
  </form>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const state = reactive({
  nombre: ''
})

const rules = computed(() => ({
  nombre: { required }
}))

const v$ = useVuelidate(rules, state)

const enviar = async () => {
  const esValido = await v$.value.$validate()

  if (!esValido) {
    return
  }

  alert(`Formulario válido. Nombre: ${state.nombre}`)
}
</script>
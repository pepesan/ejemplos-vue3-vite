<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.name" :class="{ 'is-invalid': errors.name }" />
    <div v-if="errors.name" class="invalid-feedback">{{ errors.name[0] }}</div>
    <button type="submit">Enviar</button>
    <p id="resultado">{{ mensaje }}</p>
  </form>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import * as yup from 'yup'

const schema = yup.object({
  name: yup
      .string()
      .required('El campo es obligatorio')
      .min(3, 'El nombre debe tener al menos 3 caracteres'),
})

const form = reactive({
  name: '',
})

const errors = ref({})
const mensaje = ref('')
const submitted = ref(false)

// Validación reutilizable
const validate = async () => {
  errors.value = {}
  mensaje.value = ''

  try {
    await schema.validate(form, { abortEarly: false })
    mensaje.value = JSON.stringify(form)
  } catch (err) {
    errors.value = err.inner.reduce((prev, curr) => {
      if (!prev[curr.path]) {
        prev[curr.path] = []
      }
      prev[curr.path].push(curr.message)
      return prev
    }, {})
  }
}

const handleSubmit = async () => {
  submitted.value = true
  await validate()
}

// Validación reactiva tras el primer submit
watch(
    () => form.name,
    async () => {
      if (submitted.value) {
        await validate()
      }
    }
)
</script>
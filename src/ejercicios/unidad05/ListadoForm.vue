<template>
  <div class="container">
    <h2>Listado de elementos</h2>

    <form class="form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="nuevoElemento">Nuevo elemento</label>
        <input
            id="nuevoElemento"
            type="text"
            v-model="form.texto"
            :class="{ 'is-invalid': errors.texto }"
            placeholder="Escribe un elemento"
        />
        <div v-if="errors.texto" class="invalid-feedback">
          {{ errors.texto[0] }}
        </div>
      </div>

      <button type="submit">Añadir</button>
    </form>

    <p class="mensaje">{{ mensaje }}</p>

    <ul class="listado">
      <li v-for="(item, index) in items" :key="`${item}-${index}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import * as yup from 'yup'

const schema = yup.object({
  texto: yup
      .string()
      .trim()
      .required('El campo es obligatorio')
      .min(2, 'Debe tener al menos 2 caracteres'),
})

const form = reactive({
  texto: '',
})

const errors = ref({})
const mensaje = ref('')
const items = ref(['Pan', 'Leche', 'Huevos'])

const handleSubmit = async () => {
  errors.value = {}
  mensaje.value = ''

  try {
    const data = await schema.validate(form, { abortEarly: false })

    items.value.push(data.texto)

    console.log('Datos del formulario:', data)
    console.log('Listado actualizado:', items.value)

    form.texto = ''

    mensaje.value = 'Elemento añadido correctamente'
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
</script>

<style>
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #1f2028;
}

.form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  margin-top: 6px;
  color: red;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.mensaje {
  text-align: center;
  color: green;
  font-weight: bold;
  min-height: 24px;
}

.listado {
  margin: 0;
  padding-left: 20px;
}

.listado li {
  margin-bottom: 8px;
}
</style>
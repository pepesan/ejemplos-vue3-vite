<template>
  <div class="form-container">
    <form id="miform" @submit.prevent="handleSubmit">
      <h2>Registro</h2>

      <!-- Select -->
      <div class="form-group">
        <label id="country-label" for="country">País</label>
        <select
            id="country"
            v-model="form.country"
            :class="{ 'is-invalid': errors.country }"
        >
          <option value="">Selecciona un país</option>
          <option value="es">España</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
        </select>

        <div v-if="errors.country" class="invalid-feedback">
          {{ errors.country[0] }}
        </div>
      </div>

      <!-- Checkbox opcional -->
      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input
              type="checkbox"
              v-model="form.newsletter"
          />
          Quiero recibir novedades
        </label>
      </div>

      <!-- Checkbox obligatoria -->
      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input
              type="checkbox"
              v-model="form.acceptTerms"
          />
          Acepto las condiciones
        </label>

        <div v-if="errors.acceptTerms" class="invalid-feedback">
          {{ errors.acceptTerms[0] }}
        </div>
      </div>

      <button type="submit" :disabled="!form.acceptTerms">
        Enviar
      </button>

      <p id="resultado">{{ mensaje }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import * as yup from 'yup'

const schema = yup.object({
  country: yup
      .string()
      .required('Debes seleccionar un país'),

  newsletter: yup
      .boolean(),

  acceptTerms: yup
      .boolean()
      .oneOf([true], 'Debes aceptar las condiciones'),
})

const form = reactive({
  country: '',
  newsletter: false,
  acceptTerms: false,
})

const errors = ref({})
const mensaje = ref('')

const handleSubmit = async () => {
  errors.value = {}
  mensaje.value = ''

  try {
    await schema.validate(form, { abortEarly: false })

    console.log('Datos del formulario:', {
      country: form.country,
      newsletter: form.newsletter,
      acceptTerms: form.acceptTerms
    })

    mensaje.value = 'Formulario enviado exitosamente'
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
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #007bff;
  outline: none;
}

.checkbox-group input[type='checkbox'] {
  width: auto;
  margin-right: 8px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-weight: normal;
  cursor: pointer;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

button[type='submit'] {
  width: 100%;
  padding: 12px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type='submit']:hover:not(:disabled) {
  background-color: #0056b3;
}

button[type='submit']:disabled {
  background-color: #9bbce0;
  cursor: not-allowed;
}

#resultado {
  margin-top: 25px;
  text-align: center;
  color: green;
  font-weight: bold;
  font-size: 16px;
}
</style>
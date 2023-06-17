<template>
  <form @submit.prevent="handleSubmit">
    <label for="name">Name</label>
    <input name="name" id="name" v-model="form.name" type="text">

    <label for="age">Age</label>
    <input name="age" id="age" v-model="form.age" type="number">

    <label for="birth">Date of birth</label>
    <input name="birth" id="birth" v-model="form.birth" type="date">
    <input type="submit" value="Enviar Fomulario de Trabajo" />
  </form>

</template>



<script setup>
import {ref, reactive} from "vue"

let form = reactive({
  name: "",
  age: "",
  birth: "",
});

const handleSubmit = () => {
alert(`
    - Nombre: ${form.name}
    - Edad: ${form.age}
    - Resumen: ${form.birth}`)
}
// Ejercicios Two Way Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.
</script>

<style scoped>
</style>
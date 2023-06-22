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

  <Slots/>

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


// ------------------------->

// Quiero que se creen un componente en vue, este componene va a tener solo un h1 mediante un prop y un espacio reservadon tipo slot.
// ---
// Este componente me lon van a importar 3 veces dentro del app.
// ---
// 1er componente va atener un h1 de titulo que diga banda de rock prefereida y dentro del componente quiero que me inyecten un elemento tipo imagen con la foto de la banda
// ---
// 2do componente va atener un h1 de titulo que diga comida prefereida y dentro del componente quiero que me inyecten un elemento tipo imagen con la foto de la comida + una lista no ordenada con los ingredientes que lleva.
// ---
// 3er component va atener un h1 de titulo que diga su lugar da veraneo pereferido y dentro del componente quiero que me inyecten un elemento tipo imagen con la foto del lugar + un embeded del lugar por parte de google maps!

</script>

<style scoped>
</style>
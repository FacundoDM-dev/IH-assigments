<script setup>
import {reactive} from "vue"
// Ejercicios Attribute Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).
const idBind = "idBind";

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.
const booleanBind = true;

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).

const bindStyle = reactive({
  color: "blue",
});
const bindStyleB = reactive({
  textDecoration: "underline",
  fontSize: "20px",
});

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->

const buleanoUno = true
const buleanoDos = true
</script>

<template>
  <h2 :id="idBind">Hola idBind</h2>
  <h2 :class="booleanBind ? `green-color` : `visibility-hidden`">
    Hola v-bind segun un buleano por clase
  </h2>
  <h2 :style="[bindStyle, bindStyleB]"> Hola v-bind a traves de dos variables</h2>
  <h2 :class="[buleanoUno && `color-red`, buleanoDos && `line`]">HolaVUE</h2>
</template>

<style scoped></style>

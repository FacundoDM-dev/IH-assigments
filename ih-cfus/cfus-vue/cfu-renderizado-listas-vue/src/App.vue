<script setup>
import {ref,reactive} from "vue"
const arrayNumeros = ref([1,2,3,4,5,6,7,8,9])

const bindId = ref("bindId")
const bindClass = ref("bindClass")

const bindStyle = reactive({
  color: "blue",
  textDecoration: "underline",
  fontSize: "20px",
}
)

const bindClass2 = reactive(["blue" , "Red"])

</script>

<template>
  <h1 :id="bindId">Hola v-bind por ID</h1>
  <h2 :class="bindClass">Hola v-bind por CLASS</h2>
  <h3 :style="bindStyle">Hola v-bind por STYLE</h3>
  <h4 :class="bindClass2">Hola v-bind por CLASS CONDICIONAL</h4>
  <ul>
    <li v-for="numero in arrayNumeros">{{ numero }}</li>
  </ul>
</template>

<style scoped>

#bindId {
  color: red;
  text-decoration: underline;
  font-size: 20px;
}

.bindClass {
  color: blue;
  text-decoration: underline;
  font-size: 20px;
}

</style>

<!-- // Ejercicios Attribute Binding

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos un <h1> que tendrá un id bindeado. Dicho id tiene que tomar como referencia una variable que habréis creado en vuestro <script setup>. Apuntando al id en cuestión desde el <style> tag le daréis un poco de estilo (color, underline... lo que queráis).

// Ej.2: Creamos un <h2> con un binding de clase. Este binding debe asignar una clase u otra según una variable booleánica. Si la variable es verdadera el h2 debería verse de color verde. En caso contrario, NO deberíamos ver el h2 en el render.

// Ej.3: Cramos un <h3> con un binding de estilo. Este binding debe leer un array de variables que tendréis en vuestro <script setup>. Cada variable debería ser una variable reactiva con un valor de objeto que contenga diferentes estilos de CSS (los que queráis).

// Ej.4: Creamos un <h4> con un binding de clase que contendrá un array. El primer elemento del array leerá una variable booleánica y solo si esta es true aplicará una clase 'red' que cambie el color a rojo. El segundo elemento del array leerá otra variable booleánica y, según si es verdadera o falsa, aisgnará un border al h4 o no. -->

<script setup>
import { ref, reactive } from "vue";

let miIntro = ref("Mi nombre es Facundo")

</script>

<template>
  <div class="header">
    <h2>
      Suma aplicada directamente al dom a travez de la sintaxis mostache === { {
      2+2 } }
    </h2>
    <h1>{{ 2 + 2 }}</h1>
    <hr>

    <h2>
      Usando un string reactivo a travez del metodo ref()
    </h2>

    <h1>{{miIntro}}</h1>


  </div>
</template>

<style scoped></style>

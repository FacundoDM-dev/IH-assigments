<template>
  <div>
    <ComponenteChild @testZ="testFunction" :descript="'boton1'"/>
    <ComponenteChild @testI="testFunctionDos" :descript="'boton2'"/>
    <ComponenteChild @testX="capturaMensajeHijo" :descript="'boton3'"/>
    <p>{{ emitInfoCapturada }}</p>
    <!-- <ComponenteChild @test2="testFunctionDos"/> -->
    <!-- <ComponenteChild @testI="testFunctionTres"/> -->
    
  </div>
</template>

<script setup>
import {ref, reactive} from "vue"
import ComponenteChild from './components/Componente-child.vue';

const emitInfoCapturada = ref("")

const capturaMensajeHijo = (param) => {
  emitInfoCapturada.value = param.value ++
}

const testFunction = () => {
  alert("test emit uno")
}

const testFunctionDos = () => {
  alert("test emit dos")
}

const testFunctionTres = () => {
  alert("test emit tres")
}

</script>

<style scoped>

</style>
<script setup>
import {ref, reactive} from "vue"
const inputTextReactive = ref("Hi, there!")
const checkBox = ref(false)
const savageAnimals = ref([])
</script>

<template>
  <h2>Put some text in here:</h2>
  <input type="text" v-model="inputTextReactive" /> {{ inputTextReactive }}

  <input type="checkbox" id="checkBox" v-model="checkBox"/>
  <label for="chekBox">CheckOrNotCheck? {{ checkBox }}</label>

  <input type="checkbox" id="orangutan" value="orangutan" v-model="savageAnimals"/>
  <label for="orangutan">orangutan</label>
  <input type="checkbox" id="lion" value="lion" v-model="savageAnimals"/>
  <label for="lion">lion</label> 
  <input type="checkbox" id="cebra" value="cebra" v-model="savageAnimals"/> 
  <label for="cebra">cebra</label>
  <p>{{ savageAnimals }}</p>

</template>

<style scoped>

</style>

<script setup>
import {ref} from "vue"
const arrayNumeros = [1,2,3,4,5,6,7,8,9]
</script>

<template>
  <ul>
    <li v-for="numero in arrayNumeros"> {{ numero }} </li>
  </ul>
 
</template>

<style scoped>

</style>

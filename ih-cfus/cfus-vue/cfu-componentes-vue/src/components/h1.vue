<script setup>
import { ref, onMounted, computed } from "vue";

const usuarios = ref([]);
const edadFilter = ref(0)
onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3000/usuarios");
    usuarios.value = await response.json();
  } catch (error) {
    console.log("Ha surgido un error en la matrix", error);
  }
});
const filterUsers = computed(() => {
    return usuarios.value.filter(usuario => usuario.edad > edadFilter.value)
}
)

const suma = () => {
    edadFilter.value++
}

const resta = () => {
    edadFilter.value--
}
</script>


<template>
  <h1>Lista usuarios mayores que {{ edadFilter }} años.</h1>
  <button @click="suma">+</button>
  <button @click="resta">-</button>
  <ul>
    <li v-for="usuario in filterUsers" :key="usuario.id">{{ usuario.nombre }}</li>
  </ul>
</template>


<style scoped>
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'
</script>

<template>
 <div>
  <NavBar/>
  <div class=" container">
    <RouterView />
  </div>
  
 </div>
</template>

<style scoped>

</style>

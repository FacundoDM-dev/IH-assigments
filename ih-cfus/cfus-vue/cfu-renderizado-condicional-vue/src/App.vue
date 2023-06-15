<script setup>
import { ref } from "vue";
const buttonBoolean = ref(false);

</script>

<template>
  <div>
    <button @click="buttonBoolean = true" v-if="!buttonBoolean">Log In</button>
    <button @click="buttonBoolean = false" v-else="buttonBoolean">Log Out</button>
  </div>
</template>

<style scoped>
</style>

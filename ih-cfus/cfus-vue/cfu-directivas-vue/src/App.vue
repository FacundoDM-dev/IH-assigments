<script setup>
import { ref } from "vue";
const active = ref(true);
</script>

<template>
  <div>
    <button v-bind:disabled="active">Subscribe</button>
  </div>
</template>

<style scoped></style>

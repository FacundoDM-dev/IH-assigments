<script setup>
import Card from './components/Card.vue'; 
let title = "Hi title SLOT"
</script>

<template>
  <Card>
    <template #title>
      <h1>{{ title }}</h1>
    </template>
    <template #description>
      <p>Description SLOT</p>
    </template>
  </Card>
</template>

<style scoped>

</style>

<script setup>
  import {computed, ref} from 'vue';
  const firstName = ref('Facundo');
  const lastName = ref('Del Médico'); 
  const fullName = computed(() => firstName.value + ' ' + lastName.value);
</script>


<template>
  <h1>My name is: {{ fullName }}</h1>
</template>

<style scoped>
*{
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  justify-content: center;
}
</style>

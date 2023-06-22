<script setup>
const messageAlertEvent = () => {
    setTimeout( () => {
      alert("here is your alert message")
    },2000)
};
</script>

<template>
  <button @click="messageAlertEvent">Click for alert message in 2 seconds</button>
</template>

<style scoped>

</style>

<script setup>
const props = defineProps({
  name: String,
  bgColor: String,
  css: String
});
</script>
<template>
    <button :class="css" :style="{ backgroundColor: bgColor }">{{ name }}</button>
</template>

<style scoped>
</style>
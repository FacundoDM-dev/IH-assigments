<script setup>
const props = defineProps({
  name: String,
  img: String,
  rating: Number,
});
</script>

<template>
  <div class="canine">
    <h2 class="canine__name">{{ name }}</h2>
    <span class="canine__rating">{{ rating }}</span>
    <img class="canine__image" :src="img" />
  </div>
</template>


<style scoped>

</style>

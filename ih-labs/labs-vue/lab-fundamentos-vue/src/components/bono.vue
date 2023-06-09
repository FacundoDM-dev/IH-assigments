<script setup>

const colorChange = () => {
    const buttonColorChange = document.querySelector(".button-blue");
    buttonColorChange.classList.toggle("button-red");
}

</script>

<template>

    <button class="button-blue" @click="colorChange()">Click para cambiar de color!</button>
    
</template>

<style scoped>
</style>
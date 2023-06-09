<script setup>
import NavBarApp from './components/nav-bar-app.vue';
import FooterApp from './components/footer-app.vue';
import HeaderAppHome from './components/header-app.vue';

import { toRefs, reactive, defineComponent } from "vue";
const state = reactive({
  count: 0,
});
const increaseCount = () => {
  state.count++;
};

</script>

<template>

<NavBarApp/>

<HeaderAppHome/>

<FooterApp/>

<button @click="increaseCount">count is: {{ state.count }}</button>

</template>

<style scoped>

</style>




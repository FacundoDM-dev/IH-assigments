<script setup>
import Modal from './components/Modal.vue';
import { ref } from "vue";
const modalHidden = ref(false);
const showModal = () => {
  modalHidden.value = true;
};
const closeModal = () => {
modalHidden.value = false;
};
</script>

<template>
  <div class="container">
    <button @click="showModal">Show Modal</button>
    <Modal v-show="modalHidden" @close="closeModal" />
  </div>
</template>

<style scoped></style>

<script setup>
import Props from "./components/Props.vue";
import ButtonNN from "./components/Button.vue";
const nameDog = "Dogo Argentino";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-1 my-2 background px-5">
        <ButtonNN name="azul" bg-color="blue" />
        <ButtonNN class="btn" name="rojo" bg-color="red" />
        <ButtonNN class="green" name="verde" />
      </div>
    </div>

    <Props
      :name="nameDog"
      img="https://cdn.royalcanin-weshare-online.io/APoMHmsBIYfdNSoCiRsR/v4/bd179h-hub-dogo-argentino-adult-black-and-white?fm=jpg&auto=compress"
      :rating="11"
    />
  </div>
</template>

<style scoped></style>

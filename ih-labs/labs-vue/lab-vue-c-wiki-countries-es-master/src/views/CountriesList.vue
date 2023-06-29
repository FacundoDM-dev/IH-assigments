<template>
  <div class="d-flex">
    <div
      class="container col-4 border"
      style="overflow-y: scroll; height: 80vh"
    >
      <div class="row">
        <div
          v-for="country in store.countrysObject"
          :key="country"
          class="d-flex justify-content-center border"
        >
          <div
            class="d-flex justify-content-center flex-column align-items-center pt-3"
          >
            <router-link
              class="d-flex flex-column align-items-center"
              :to="`/list/${country.alpha3Code}`"
            >
              <img
                :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              />
              <p class="text-center">{{ country.name.common }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="border">
      <RouterView  />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCountriesStore } from "../stores/countries";

const store = useCountriesStore();
</script>

<style scoped></style>

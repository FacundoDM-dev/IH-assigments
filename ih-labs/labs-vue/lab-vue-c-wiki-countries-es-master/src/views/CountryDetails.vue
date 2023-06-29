<template>
  <div class="row">
    <div>
      <img
        :src="`https://flagcdn.com/w320/${countryDetails.alpha2Code.toLowerCase()}.png`"
        alt="country flag"
        style="width: 100px"
      />
      <h1>{{ countryDetails.name.common }}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{{ countryDetails.capital }}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{{ countryDetails.area }} km <sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul v-for="border in countryDetails.borders" :key="border">
                <li>
                  <RouterLink :to="`/list/${border}`">{{ border }}</RouterLink>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const countryDetails = ref(null);

const route = useRoute();

const recibirAlphaTresCode = async () => {
  const alpha3code = route.params.alpha3Code;

  const response = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${alpha3code}`
  );

  const data = await response.json();

  countryDetails.value = data;
};

recibirAlphaTresCode();

const countryCode = computed(() => route.params.alpha3Code);

watch(countryCode, () => {
  recibirAlphaTresCode();
});
</script>

<style lang="scss" scoped></style>

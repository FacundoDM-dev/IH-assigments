import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", () => {
  const countrysObject = ref(null);

  const countries = async () => {
    try {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );

      const data = await response.json();

      const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      countrysObject.value = sortedCountries;
    } catch (error) {
      console.log("error request: ", error);
    }
  };

  countries();

  return { countrysObject };
});

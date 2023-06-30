import { defineStore, createPinia } from "pinia";
import axios from "axios";

export const useStore = createPinia();

export const useCountryStore = defineStore("countryStore", {
  state: () => ({
      countries: [],
      currentCountryCode: null,
    }),

  actions: {
    async loadCountries() {
      const response = await axios.get("../../public/countries.json");
      this.countries = response.data;
      console.log(countries.$id);
    },
  },
});

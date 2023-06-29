import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../views/CountriesList.vue";
import CountryDetails from "../views/CountryDetails.vue";

const router = createRouter({
  history: createWebHistory("/"),

  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },

  routes: [
    {
      path: "/",
      name: "list",
      component: CountriesList,
      children: [
        {
          path: "/list/:alpha3Code",
          name: "list",
          component: CountryDetails,
        },
      ],
    },
  ],
});

export default router;

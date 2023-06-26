<template>
  <div class="container">
    <div class="row">
      <div class="border ">
        <div class="d-flex justify-content-center">
          <a class=" d-flex justify-content-center flex-column align-items-center pt-3" :herf="`/${countryCode}`">
            <img 
              :src="`https://flagpedia.net/data/flags/icon/72x54/${countryRoute}.png`"
            />
            <p class=" text-center">{{ countryName }}</p>  
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  countryName: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  countryRoute: {
    type: String,
  },
});
</script>

<style scoped></style>

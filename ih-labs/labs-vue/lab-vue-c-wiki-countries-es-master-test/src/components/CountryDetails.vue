<template>
     <div class="container">
        <div class="row">
            <div class="col-7 d-flex flex-column gap-4">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${countryRoute}.png`" alt="country flag" style="width: 300px"/>
            <h1>Frances</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">{{  }}test</a></li>
                      
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
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

<style scoped>
</style>
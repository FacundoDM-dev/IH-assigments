<template>
  <div>
    <div v-if="dataSongStore.mySongs.length === 0">
      <p>Todavía no hay canciones en la store</p>
    </div>

    <div v-else>
      <div v-for="song in dataSongStore.mySongs" :key="song">
        <P>{{ song }}</P>
      </div>
    </div>
    <div>
        <input v-model="addSong" type="text">
        <button @click="addSongFunc(addSong)">Add Song</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSongStore } from "../stores/mySongs";

const dataSongStore = useSongStore();

</script>

<style scoped></style>

<script setup>

import { ref, reactive} from "vue"

const musicalPosts = ref([
  { 
    id:1,
    band: 'Red Hot Chilli Peppers',
    musicalGenre: 'Funk Rock',
    bestSong: 'Californication'
  },
  { 
    id:2,
    band: 'Rage Against The Machine',
    musicalGenre: 'Rap Metal',
    bestSong: 'killing in the name'
  },
  { 
    id:3,
    band: 'The Strokes',
    musicalGenre: 'Indie Garage Rock',
    bestSong: 'Last Nite'
  },
]);

</script>


<template>

    <ul>
        <li v-for="musicalPost in musicalPosts" :key="musicalPost.id">
            <h2>{{ musicalPost.band }}</h2>
            <h3>{{ musicalPost.musicalGenre }}</h3>
            <h3>{{ musicalPost.bestSong }}</h3>
        </li>
    </ul>

</template>


<style scoped></style>
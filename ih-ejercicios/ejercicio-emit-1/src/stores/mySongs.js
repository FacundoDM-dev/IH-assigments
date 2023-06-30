import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useSongStore = defineStore("counter", () => {

  let mySongs = reactive([]);

  let addSong = ref("")

  let addSongFunc = (Song) => {
    addSong.push(Song);
  }


  return { mySongs, addSong, addSongFunc };
});

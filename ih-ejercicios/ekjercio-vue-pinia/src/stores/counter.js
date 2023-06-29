import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const foundedBuenosAires = ref("La ciudad de Buenos Aires tuvo dos fundaciones. La primera tuvo lugar en 1536 y fue realizada por Pedro de Mendoza. La segunda fue llevada adelante por Juan de Garay en 1580. Éste había partido en Abril de 1573 junto a cien hombres al frente de una expedición desde Asunción.")

  const timeLivedInBsAs = ref(27)

  let timeLivedInBsAsPlusTwo = () => timeLivedInBsAs.value += 2


  return { foundedBuenosAires, timeLivedInBsAs, timeLivedInBsAsPlusTwo }

})

<template>
    <div>
        <h1>Frank Zappa</h1>
        <p>Frank Vincent Zappa1​ (Baltimore, Maryland; 21 de diciembre de 1940-Los Ángeles, California; 4 de diciembre de 1993) fue un compositor, guitarrista, cantante, productor discográfico y director de cine estadounidense. Con una carrera de más de treinta años, Zappa compuso rock, jazz, blues, electrónica, música artística y música concreta, entre otros. También trabajó como director de cine y de videoclips, y diseñó portadas de álbumes. Además, se encargó de la producción de los más de sesenta álbumes que grabó con The Mothers of Invention y en solitario.2​</p>
        <button @click="ZappaImage">Image Frank Zappa</button>
        <img v-if="zappaImageBoolean" src="https://valenciaplaza.com/public/Image/2021/6/1624468167unnamed_NoticiaAmpliada.jpg" alt="imagen de zappa">
    </div>
</template>

<script setup>

import {ref} from 'vue'

const zappaImageBoolean = ref(false)

const ZappaImage = () => {
    zappaImageBoolean.value = !zappaImageBoolean.value
}
</script>

<style scoped>

</style>
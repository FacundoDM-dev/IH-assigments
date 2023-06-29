<template>
    <div>
        <h1>{{ dataStore.foundedBuenosAires }}</h1>
        <h1> He vivido en Buenos Aires {{ dataStore.timeLivedInBsAs }} años.</h1>
        <button @click="useCounterStore().timeLivedInBsAsPlusTwo">Suma dos a los años vividos</button>      
    </div>
</template>

<script setup>

import {useCounterStore} from '../stores/counter'

const dataStore = useCounterStore()


</script>

<style scoped>

</style>
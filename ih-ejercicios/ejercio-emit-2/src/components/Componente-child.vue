<template>
    <div>
        <button v-text="descript" @click="functionEmits"></button>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue"

defineProps({
    descript:{
        type: String,
        default: "Hola soy un boton"
    }
}  
)
let emits = defineEmits(['testX','textI','textZ',])

const emitInfo = ref(5)

let functionEmits = () => {
    emits("testX", emitInfo)
    emits("testI")
    emits("testZ")
}




</script>

<style lang="scss" scoped>

</style>
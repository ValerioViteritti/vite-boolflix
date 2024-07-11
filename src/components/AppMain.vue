<script>
// Importa la gestione dello stato
import { store } from '../store.js'

import AppFilmCard from "./AppFilmCard.vue";


export default {
    name: 'AppMain',
    components: {
        AppFilmCard,
    }

}

</script>

<template>
    QUESTO E' APPMAIN
    <AppFilmCard />

</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
</style>
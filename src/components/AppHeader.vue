<script>
// Importa la gestione dello stato
import { store } from '../store.js'

import AppSearch from "./AppSearch.vue"


export default {
    name: 'AppHeader',
    components: {
        AppSearch,
    }

}

</script>

<template>
    <header>
        QUESTO E' APPHEADER
        <AppSearch />

    </header>


</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
</style>
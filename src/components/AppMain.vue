<script>
// Importa la gestione dello stato
import { movieStore } from '../store.js'
import { serieTvStore } from '../store.js'

import AppFilmCard from "./AppFilmCard.vue";


export default {
    name: 'AppMain',
    components: {
        AppFilmCard,
    },
    data(){
        return {
            movieStore,
            serieTvStore
        }
    }

}

</script>

<template>
    <div class="container">
        <div class="row display-flex">
            <!-- <div v-for="image in movieStore.imageList" :key="image.id" class="col-3">
                <AppFilmCard :img="image"/>
            </div> -->
            <div v-for="movie in movieStore.movieList" :key="movie.id" class="col-3">
                <AppFilmCard :info="movie"/>
            </div>
            


        </div>


    </div>


</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
</style>
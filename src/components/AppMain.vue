<script>
// Importa la gestione dello stato
import { Store } from '../store.js'


import AppFilmCard from "./AppFilmCard.vue";
import AppSerieTvCard from "./AppSerieTvCard.vue";

export default {
    name: 'AppMain',
    components: {
        AppFilmCard,
        AppSerieTvCard
        
    },
    data(){
        return {
            Store,
            
        }
    }

}

</script>

<template>
    <div class="container">
        <div class="row display-flex">
            <div class="piattaforma text-center fw-bold my-3">-> FILM <-</div>
            <div v-for="movie in Store.movieList" :key="movie.id" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <AppFilmCard :info="movie"/>
            </div>
            <div class="piattaforma text-center fw-bold my-3">-> SERIE TV <-</div>
            <div v-for="serieTv in Store.serieTvList" :key="serieTv.id" class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <AppSerieTvCard :info="serieTv"/>
            </div>


        </div>


    </div>


</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
div.container{
    background-color: $theme-2;
    min-height: 91vh;

    .piattaforma{
        color: white;
        font-size: 2rem;
    }
}
</style>
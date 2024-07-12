<script>

// Importa la gestione dello stato
import { movieStore } from '../store.js'
import { serieTvStore } from '../store.js'


export default {
    name: 'AppFilmCard',
    props:['info'],
    data() {
        return{
            movieStore,
            serieTvStore
        }
    }

}

</script>

<template>
    <div class="cardFilm my-3 p-2 text-center">
        <h3>{{info.original_title}}</h3>
        <span>{{info.vote_average}}</span>
        <p>{{info.overview}}</p>
    </div>


</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;

.cardFilm{
    height: 600px;
    border: 2px solid black;

}

</style>
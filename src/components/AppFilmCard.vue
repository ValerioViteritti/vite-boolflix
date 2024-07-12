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
    },
    methods: {
        convertToRange(value) {
            let num = parseFloat(value);
            if(num <= 1 ) {
                return 'o';
            }
            if (num <= 3 ) {
                return 'oo';
            }
            if (num <= 5 ) {
                return 'ooo';
            }
            if  (num <= 7 ) {
                return 'oooo';
            }
            else if(num <= 10 ) {
                return 'ooooo';
            }
        }
    }

}

</script>

<template>
    <div class="cardFilm my-3 p-2 text-center">
        <h3>{{info.original_title}}</h3>
        <span>{{convertToRange(info.vote_average)}}</span>
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
    overflow-y: scroll;

}

</style>
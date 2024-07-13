<script>

// Importa la gestione dello stato
import { movieStore } from '../store.js'
import { serieTvStore } from '../store.js'


export default {
    name: 'AppFilmCard',
    props:['info', 'img'],
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
    <div id="baseCard" class="my-3">
        <div id="flipCard">
            <div class="col-3 my-3 imageFilm">
                <img :src="`${movieStore.imageUrlFilm}${info.poster_path}`" :alt='`${info.original_title}`'>
            </div>
            
            <div class="cardFilm my-3 p-2 text-center">
                <h3>{{info.original_title}}</h3>
                <span>{{convertToRange(info.vote_average)}}</span>
                <p>{{info.overview}}</p>
            </div>

        </div>

    </div>
    
    


</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
div#baseCard{

    height: 500px;

    // rotate system
    &:hover div#flipCard{
            transform: rotateY(180deg);
        }
    
    div#flipCard{
        height: 100%;

        // rotate system
        position: relative;
        transform-style: preserve-3d;
        transition: transform 1.0s;

        

        .imageFilm{
            width: 100%;
            height: 100%;

            // rotate system front
            position: absolute;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;



            img{
                height: 100%;
                width: 100%;

            }
            

        }

        .cardFilm{
        height: 100%;
        border: 2px solid black;
        overflow-y: scroll;
        background-color: black;
        color: white;

        // rotate system back
        position: absolute;
        transform: rotateY(180deg);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

        }

    }

}




</style>
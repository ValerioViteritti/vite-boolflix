<script>
// Importa la gestione dello stato
import { Store } from '../store.js'
// import { serieTvStore } from '../store.js'

export default {
    name: 'AppHeader',

    data() {
        return {
            Store,  // Associa lo store ai dati del componente
            // serieTvStore,
        }
    },
    methods: {
        restSearch() {
            Store.SearchText = '';
            this.$emit('search');
        },
        enterCerca(event) {
            if (event.key === 'Enter') {
                this.$emit('search');
            }
        },
        
    }

}



</script>

<template>
    <header>
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <div id="logo" class="col-xl-3 col-lg-3 col-md-2 col-sm-2 fw-bold">BOOLFLIX</div>
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-12 d-flex gap-3">
                    <label for="search-film">cerca un film</label>
                    <input type="text" placeholder="Cerca un Film o una Serie Tv" v-model="Store.SearchText" @keydown="enterCerca">
                    <button type="submit" @click.prevent="$emit('search')">Cerca</button>
                    <button type="reset" @click.prevent="restSearch">Reset</button>
                </div>

            </div>
        </div>

    </header>
    



</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
header{
    background-color: $theme-1;
    height: 9vh;

    .container {
        
        .row {
            div#logo {
                font-size: 2rem;
                color: $primary;
            }

            div {
                margin: 20px 0;


                input {
                    border-radius: 10px;
                    padding: 5px 25px;
                }

                button {
                    border-radius: 10px;
                }
            }
        }
    }

}

</style>
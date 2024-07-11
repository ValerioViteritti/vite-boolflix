<script>
// Importa la gestione dello stato
import { store } from '../store.js'


export default {
    name: 'AppSearch',

}



</script>

<template>
    <DIV class="container">
        <DIV class="row d-flex justify-content-between align-items-center">
            <div id="logo" class="col-3">BOOLFLIX</div>
            <div class="col-3"><input type="text" placeholder="Cerca un Film o una Serie Tv"></div>

        </DIV>
    </DIV>



</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;

.container {
    .row {
        div#logo {
            font-size: 2rem;
        }

        div {
            margin: 20px 0;


            input {
                border-radius: 10px;
                padding: 5px 25px;
            }
        }
    }
}
</style>
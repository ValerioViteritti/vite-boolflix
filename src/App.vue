<script>
// Importa axios per effettuare richieste HTTP
import axios from 'axios'

// Importa la gestione dello stato
import { movieStore } from './store.js'
import { serieTvStore } from './store.js'

// importa componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppSearch from "./components/AppSearch.vue"


export default {
  name: "App", // Nome del componente principale
  components: {
    AppHeader, // Componente per l'intestazione dell'app
    AppMain,
    AppSearch // Componente del Main

  },
  data() {
    return {
      movieStore,  // Associa lo store ai dati del componente
    }
  },
  methods: {
    getFilms() {
      let endFilmPoint = movieStore.apiURl;

      // se si avvia una ricerca aggiungiamo la query

      if (movieStore.movieSearchText !== '') {
        endFilmPoint += `${movieStore.movieSearchText}`

      }

      axios.
        get(endFilmPoint)
        .then(res => {
          console.log(res.data.results);
          movieStore.movieList = res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.getFilms();
  }
}


</script>

<template>

  <div id="app">
    <!-- <AppHeader /> -->
    <AppSearch @search="getFilms" />

    <main>
      <AppMain />


    </main>
  </div>



</template>

<style lang="scss">
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;

main {
  background-color: $theme-2;
}
</style>

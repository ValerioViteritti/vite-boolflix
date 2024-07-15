<script>
// Importa axios per effettuare richieste HTTP
import axios from 'axios'

// Importa la gestione dello stato
import { Store } from './store.js'
// import { serieTvStore } from './store.js'

// importa componenti
import AppMain from './components/AppMain.vue'
import AppHeader from "./components/AppHeader.vue"


export default {
  name: "App", // Nome del componente principale
  components: {
    AppMain,
    AppHeader // Componente del Main

  },
  data() {
    return {
      Store,  // Associa lo store ai dati del componente
    }
  },
  methods: {
    getFilms() {
      
      // se si avvia una ricerca aggiungiamo la query

      if (Store.SearchText !== '') {

        let endFilmPoint = Store.apiURl;
        let endSeriePoint = Store.api2URl;
        
        endFilmPoint += `${Store.SearchText}`
        endSeriePoint += `${Store.SearchText}`
      

      axios.
        get(endFilmPoint)
        .then(res => {
          console.log(res.data.results);
          Store.movieList = res.data.results;
        })
        .catch(err => {
          console.error(err);
        });
        axios.
        get(endSeriePoint)
        .then(res => {
          console.log(res.data.results);
          Store.serieTvList = res.data.results;
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
}

</script>

<template>

  <div id="app">
    <AppHeader @search="getFilms" />

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

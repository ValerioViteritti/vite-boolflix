<script>
// Importa axios per effettuare richieste HTTP
import axios from 'axios'

// Importa la gestione dello stato
import { store } from './store.js'

// importa componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
  name: "App", // Nome del componente principale
  components: {
    AppHeader, // Componente per l'intestazione dell'app
    AppMain, // Componente del Main

  },
  data() {
    return {
      store,  // Associa lo store ai dati del componente
    }
  }
}


</script>

<template>

  <div id="app">
    <AppHeader />

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

main {}
</style>

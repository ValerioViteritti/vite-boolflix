import { reactive } from 'vue'

// Importazione dell'API principale
export const store = reactive({
    charactersList: [],
    apiURl: "",
    searchText: "",
});
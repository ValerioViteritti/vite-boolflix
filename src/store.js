import { reactive } from 'vue'

// Importazione dell'API principale
export const movieStore = reactive({
    movieList: [],
    apiURl: "https://api.themoviedb.org/3/search/movie?api_key=a0eaecc8086b5da87f94347ac1a74575&include_adult=true&language=it-IT&page=1&query=",
    imageUrlFilm: "https://image.tmdb.org/t/p/w342",
    movieSearchText: "",
    imageFilm: 'poster_path',
});

export const serieTvStore = reactive({
    serieTvList: [],
    apiURl: "https://api.themoviedb.org/3/search/tv?api_key=a0eaecc8086b5da87f94347ac1a74575&include_adult=true&language=it-IT&page=1&query=",
    serieTvSearchText: "",
});
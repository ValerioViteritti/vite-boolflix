import { reactive } from 'vue'

// Importazione dell'API principale
export const Store = reactive({
    movieList: [],
    apiURl: "https://api.themoviedb.org/3/search/movie?api_key=a0eaecc8086b5da87f94347ac1a74575&include_adult=true&language=it-IT&page=1&query=",
    serieTvList: [],
    api2URl: "https://api.themoviedb.org/3/search/tv?api_key=a0eaecc8086b5da87f94347ac1a74575&include_adult=true&language=it-IT&page=1&query=",
    imageUrlFilm: "https://image.tmdb.org/t/p/w342",
    SearchText: "",
    imageFilm: 'poster_path',
});

// export const serieTvStore = reactive({
    
//     serieTvSearchText: "",
//     imageUrlFilm: "https://image.tmdb.org/t/p/w342",
//     imageFilm: 'poster_path',
// });
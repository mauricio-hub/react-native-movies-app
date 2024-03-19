import { AxiosAdapter } from "./http/axios.adapters";


export const movieDBFetcher = new AxiosAdapter({
    baseUtl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd5e3b6f4b4d8c1b3c7f9d3e7a9e7b1f0',
        language: 'es'
    }
})
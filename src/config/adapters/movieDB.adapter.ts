import { AxiosAdapter } from "./http/axios.adapters";


export const movieDBFetcher = new AxiosAdapter({
    baseUtl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '',
        language: 'es'
    }
})
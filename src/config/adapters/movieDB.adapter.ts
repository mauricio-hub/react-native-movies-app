import { REACT_THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapters";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: REACT_THE_MOVIE_DB_KEY,
    language: "es",
  },
});

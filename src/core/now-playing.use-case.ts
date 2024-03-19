import { HttpAdapter } from "../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../infrastructure/interfaces/movies-db.responses";
import { Movie } from "./entities/movie.entity";

export const movieNowPlayingUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {

    try {

       const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing'); 

       console.log({nowPlaying});
      
       return []
    } catch (error) {
        console.log('error',error);
        throw new Error(`Error getting now playing movies: ${error}`);
    }
}
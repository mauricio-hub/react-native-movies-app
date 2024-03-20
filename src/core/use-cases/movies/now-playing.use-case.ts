import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movies.mappers";
import { Movie } from "../../entities/movie.entity";

export const movieNowPlayingUseCase  = async (fetcher:HttpAdapter):Promise<Movie[]> => {

    try {

       const nowPlaying = await fetcher.get<NowPlayingResponse>('/upcoming'); 

       return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);

      
    
    } catch (error) {
        console.log('error',error);
        throw new Error(`Error getting now playing movies: ${error}`);
    }
}
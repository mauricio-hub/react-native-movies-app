import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movies.mappers";
import type { Movie } from "../../entities/movie.entity";

export const  moviesUpComingUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {

    try {

       const upComing= await fetcher.get<MovieDBResponse>('/upcoming'); 

       return upComing.results.map(MovieMapper.fromMovieDBResultToEntity);

      
    
    } catch (error) {
        console.log('error',error);
        throw new Error(`Error getting up coming use case movies: ${error}`);
    }
}
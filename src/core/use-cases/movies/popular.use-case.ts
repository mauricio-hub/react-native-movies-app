import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movies.mappers";
import { Movie } from "../../entities/movie.entity";

export const  PopularUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {

    try {

       const popular = await fetcher.get<MovieDBResponse>('/popular'); 

       return popular.results.map(MovieMapper.fromMovieDBResultToEntity);

      
    
    } catch (error) {
        console.log('error',error);
        throw new Error(`Error getting popular use case movies: ${error}`);
    }
}
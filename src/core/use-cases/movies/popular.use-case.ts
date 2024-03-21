import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movies.mappers";
import { Movie } from "../../entities/movie.entity";

interface Options{
  page?: number;
  limit?: number;
}


export const PopularUseCase = async (
  fetcher: HttpAdapter,options?: Options 

): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBMoviesResponse>("/popular",{
      params: {
        page: options?.page ?? 1,
      },
    });

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log("error", error);
    throw new Error(`Error getting popular use case movies: ${error}`);
  }
};

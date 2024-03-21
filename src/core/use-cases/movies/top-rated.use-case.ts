import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movies.mappers";
import { Movie } from "../../entities/movie.entity";

export const TopRatedUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>("/top_rated");

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log("error", error);
    throw new Error(`Error getting top rated use case movies: ${error}`);
  }
};

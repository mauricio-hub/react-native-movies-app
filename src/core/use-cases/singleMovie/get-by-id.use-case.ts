import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movies.mappers";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const response = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    const FullMovie = MovieMapper.fromMovieDBToEntityFull(response);

    return FullMovie;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movie by id");
  }
};

import { useEffect, useState } from "react";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/entities/movie.entity";
import { Cast } from "../../core/entities/cast.entity";

export const useSingleMovie = (movieId: number) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setLoading(true);
    const fullMoviePromise =  UseCases.getMovieByIdUseCase(movieDBFetcher, movieId);

    const castPromise =  UseCases.getCatsUseCase(movieDBFetcher, movieId);

    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise]);

    setMovie(fullMovie);
    setCast(cast);
    setLoading(false);
    
  };

  return {
    loading,
    movie,
    cast,
  };
};

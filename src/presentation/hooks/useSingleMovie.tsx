import { useEffect, useState } from "react";
import * as UseCases from "../../core/use-cases";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import { FullMovie } from "../../core/entities/movie.entity";

export const useSingleMovie = (movieId: number) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    setLoading(true);
    const fullMovie = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId
    );

    setMovie(fullMovie);
    setLoading(false);
  };

  return {
    loading,
    movie,
  };
};

import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import * as UseCases from "../../core/use-cases";

export const useMovies = () => {
  const [loading, setLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = await UseCases.movieNowPlayingUseCase(
      movieDBFetcher
    );
    const popularPromise = await UseCases.PopularUseCase(movieDBFetcher);
    const topRatePromise = await UseCases.TopRatedUseCase(movieDBFetcher);
    const upComingPromise = await UseCases.moviesUpComingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatePromise,
        upComingPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);
    setLoading(false);


    console.log(
        "nowPlayingMovies",
        nowPlayingMovies,
        "popularMovies",
        popularMovies,
        "topRatedMovies",
        topRatedMovies,
        "upComingMovies",
        upComingMovies
    );
  };

  return {
    loading,
    nowPlaying,
    popular,
    topRated,
    upComing,
  };
};

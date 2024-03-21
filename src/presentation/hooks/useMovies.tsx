import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";
import * as UseCases from "../../core/use-cases";


let popularPage = 1;

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
    const nowPlayingPromise = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher
    );
    const popularPromise = await UseCases.PopularUseCase(movieDBFetcher);
    const topRatePromise = await UseCases.TopRatedUseCase(movieDBFetcher);
    const upComingPromise = await UseCases.moviesUpcomingUseCase(
      movieDBFetcher
    );

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

    
  };

  return {
    loading,
    nowPlaying,
    popular,
    topRated,
    upComing,
    //metodos
    popularNextPage: async() => {
      popularPage++;
      const popularMovies = await UseCases.PopularUseCase(movieDBFetcher,{
        page: popularPage,
      });
      setPopular(prev => [...prev, ...popularMovies])
    },
  };
};

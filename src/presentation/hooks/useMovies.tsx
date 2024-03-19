import { useEffect, useState } from "react";
import { Movie } from "../../core/entities/movie.entity";
import { movieNowPlayingUseCase } from "../../core/now-playing.use-case";
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";


export const useMovies = () => {

    const [loading, setLoading] = useState(false);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);


    useEffect(() => {
        initialLoad()


    }, [])
    
    const initialLoad = async () => {
        const nowPlayingMovies = await movieNowPlayingUseCase(movieDBFetcher);
    }

    return {
        loading,
        nowPlaying
    }

}
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBCastResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { Cast } from "../../entities/cast.entity";





export const getCatsUseCase = async (fetcher: HttpAdapter, movieId:number):Promise<Cast[]> => {
 
    try {


        const {cast} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
        
        const actors = cast.map(CastMapper.fromMovieDBCastToEntity);

        return actors;
        
    } catch (error) {
        throw new Error("Error fetching cast");
    }

}
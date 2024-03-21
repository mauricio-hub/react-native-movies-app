import { REACT_THE_MOVIE_DB_KEY } from "@env";
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
  baseUrl: string;
  params: Record<string,string>;
}


export class AxiosAdapter implements HttpAdapter {
  
  private axiosInstance: AxiosInstance;

  constructor( options: Options ) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    })
  }


  async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
    try {
      // Combina la URL proporcionada con la baseURL para formar la URL completa
      const fullUrl = `${this.axiosInstance.defaults.baseURL}${url}`; 
      // Combina los parámetros predeterminados con los parámetros opcionales
      const params = {
        api_key: REACT_THE_MOVIE_DB_KEY,
        language: 'es',
        ...options,
      };
  
      // Realiza la solicitud GET con la URL completa y los parámetros combinados
      const { data } = await this.axiosInstance.get<T>(fullUrl, { params });
  
      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }




} 


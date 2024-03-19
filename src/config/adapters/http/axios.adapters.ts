import { HttpAdapter } from "./http.adapter";
import axios, { Axios, AxiosInstance } from "axios";

interface Optons {
  baseUtl: string;
  params: Record<string, string>;
}

export class AxiosAdapter extends HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Optons) {
    super();
    this.axiosInstance = axios.create({
      baseURL: options.baseUtl,
      params: options.params,
    });
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(url, options);

      return data;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}

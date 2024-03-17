// HttpClient.ts

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

class HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    // Ajouter des intercepteurs si nécessaire
    // this.instance.interceptors.request.use(...);
    // this.instance.interceptors.response.use(...);
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get<T>(
        url,
        config
      );
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.post<T>(
        url,
        data,
        config
      );
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.put<T>(
        url,
        data,
        config
      );
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.delete<T>(
        url,
        config
      );
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
      console.error(
        "HTTP error response:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // La requête a été effectuée, mais aucune réponse n'a été reçue
      console.error("HTTP no response received:", error.request);
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      console.error("HTTP request setup error:", error.message);
    }
  }
}

export default HttpClient;

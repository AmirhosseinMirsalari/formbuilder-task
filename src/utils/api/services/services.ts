/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IApi } from "./services.types";

// Create Axios Instance
export const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  instance.interceptors.request.use((req) => {
    req.headers.Authorization =
      "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzQzNTUxLCJpYXQiOjE3MTM4Nzk1NTEsImp0aSI6ImMzNTc5MmI0MzQ2MTQ0OTU5MDkwMTc5Y2Q0ZGMyNWQ1IiwidXNlcl9pZCI6MzB9.qkOKDZk6t3CYeCxNqDD-FCoBtFDGhM9PmYPss_LTAy0";

    return req;
  });

  return instance;
};

export class Api implements IApi {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly axios: AxiosInstance) {}
  get<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.get<T>(url, config);
  }
  post<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(url, body, config);
  }
  delete<T>(
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.delete<T>(url, config);
  }
  put<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.put<T>(url, body, config);
  }
  patch<T>(
    url: string,
    body: unknown,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T, any>> {
    return this.axios.patch<T>(url, body, config);
  }
}

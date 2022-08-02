import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface KAxiosInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface KAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: KAxiosInterceptors<T>;
  showLoading?: boolean;
}

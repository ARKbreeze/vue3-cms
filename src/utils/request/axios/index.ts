import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { ElLoading } from 'element-plus';
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading';

import type { KAxiosRequestConfig, KAxiosInterceptors } from './type';
// 扩展了 axiosConfig的功能 可以额外添加拦截器   接口继承

const DEFAULT_LOADING = false;
//默认不显示

class KAxios {
  // axios实例
  instance: AxiosInstance;
  loading?: LoadingInstance;
  showLoading: boolean;

  //拦截器补充  只是存一下
  interceptors?: KAxiosInterceptors;

  // 传入config 初始化实例
  constructor(config: KAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config?.interceptors;

    // 初始化
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

    //实例拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //全局拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading === true) {
          this.loading = ElLoading.service({
            lock: true,
            text: 'loading',
            background: 'rgba(0,0,0,0.5)'
          });
        }
        return config;
      },
      (err) => {
        console.log(err);
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close();
        this.showLoading = DEFAULT_LOADING;
        return res.data.data;
      },
      (err) => {
        this.loading?.close();
        this.showLoading = DEFAULT_LOADING;
        console.log(err);
      }
    );
  }

  //添加请求方法
  request<T>(config: KAxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 附加每个请求的拦截器判断
      // 实际上就是看你传不传给我,传给我就单独给你执行一下
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 请求的loading判断
      if (config.showLoading === true) {
        this.showLoading = true;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: KAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  post<T>(config: KAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  delete<T>(config: KAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  patch<T>(config: KAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

// 妙啊 🐱
export default KAxios;

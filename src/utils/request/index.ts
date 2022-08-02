import KAxios from './axios';
import { BASE_URL, TIME_OUT } from './axios/config';

// 这个拦截器只对这个实例
// 拦截器挂在class上 可以全部实例都有   写在构造函数里
// 请求拦截 实例拦截 类拦截
const request = new KAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {}
});
// const request1 = new KAxios({
//   baseURL: ''
// });

export default {
  request
};

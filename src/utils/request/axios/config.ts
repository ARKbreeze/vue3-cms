let BASE_URL = '';
let TIME_OUT = 5000;

if (
  process.env.NODE_ENV === 'production' &&
  process.env.VUE_APP_CURRENT_MODE === 'pro'
) {
  //生产正式包
  BASE_URL = '正式base';
  TIME_OUT = 10000;
} else if (
  //生产测试包
  process.env.NODE_ENV === 'production' &&
  process.env.VUE_APP_CURRENT_MODE === 'test'
) {
  BASE_URL = '测试base';
} else {
  //本地 跨域处理
  // 具体的url 在devServe里根据 currentMode 切换
  BASE_URL = '/api';
}

export { BASE_URL, TIME_OUT };

// import { createStore } from 'vuex';

// const store = createStore({
//   state: () => {
//     return {
//       name: 'coderwhy'
//     };
//   }
// });

// export default store;

// code码
// 1. 真实请求错误  err
// 在全局拦截catch里进行操作 switch判断
// 2. 请求成功后的 请求失败
//  通过后台定义的code码进行判断

import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      user: 'name'
    };
  }
});

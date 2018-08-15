/**
 * vuex的核心管理对象模块:最终向外暴露的是 store
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 状态对象
const state = { // 初始化状态
  count: 0
};
// 包含多个更新state函数的对象
const mutations = {
  // 本质上数据的变化只有两种,增加1和减去1
  // 增加的mutation
  INCREMENT (state) {
    state.count++;
  },
  // 减少的mutation
  DECREMENT (state) {
    state.count--;
  }
};
// 包含多个对应事件回调函数的对象
const actions = {
  // 负责增加的action
  increment ({commit}) {
    // 提交增加的mutation
    commit('INCREMENT');
  },
  // 负责减少的action
  decrement ({commit}) {
    // 提交减少的mutation
    commit('DECREMENT');
  },
  // 只有奇数才增加的action
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      // 提交增加的mutation
      commit('INCREMENT');
    }
  },
  // 异步增加的action
  incrementAsync ({commit}) {
    // 在action中直接就可以执行异步代码
    setTimeout(() => {
      // 提交增加的mutation
      commit('INCREMENT');
    }, 1000);
  }
};
// 包含多个getter计算数学函数的对象
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数';
  }
};
export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数
  getters // 包含多个getter计算属性函数的对象
});

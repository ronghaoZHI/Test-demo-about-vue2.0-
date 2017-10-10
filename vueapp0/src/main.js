// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
import axios from 'axios';
import VueAxios from 'vue-axios';
// import Resource from 'vue-resource'

// Vue.use(Resource)

// 用 axios 进行 Ajax 请求
Vue.use(VueAxios,axios);
// Vuex 进行状态管理
// Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中
Vue.use(Vuex);

Vue.config.productionTip = false

// 每个应用将仅仅包含一个 store 实例
const store = new Vuex.Store({
// 
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations: {
    increment (state,n) {  //store.commit('increment', 10)
      state.count += n;  
    },

  },
  // Getter 会暴露为 store.getters 对象
  // 可以在别的组件调用 this.$store.getters.doneTodos 
   getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  actions:{
  	 getData(){

  	 }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})

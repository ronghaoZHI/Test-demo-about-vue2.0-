// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'Vuex'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


// 用 axios 进行 Ajax 请求
Vue.use(VueAxios,axios);
// Vuex 进行状态管理
// Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中
Vue.use(Vuex);

Vue.config.productionTip = false


// 每个应用将仅仅包含一个 store 实例
const store = new Vuex.Store({
//state状态变量  在子组件-通过 methods--fn(){this.$store.commit('showAbout',flag);} 提交(变更)状态
         //通过computed--isShowAbout(){return this.$store.state.isShowAbout;} 实时获取(更新)状态
  state: {
      listData:[],
      isGetData:false,
      showIndex:0,
      isShowAbout:false,

  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation  //showAbout(state,flag){state.isShowAbout = flag;}
  mutations: {
      deleteData(state,index){
          if (state.listData.length === 0) {
             return;
          }
          state.listData.splice(payload.index, 1);
      },
      addData(state,payload){

      },
      showData(state,payload){

      },
  },
  // Getter 会暴露为 store.getters 对象
  // 可以在别的组件调用 this.$store.getters.doneTodos 
   getters: {
   
  },
  actions:{
  	 getData (commit,state){
      Vue.axios.get('/user')
      .then(function (response) {
        console.log(response.Data);
        // state.listData = response.Data;
        commit('isGetData',true);
      })
      .catch(function (error) {
        console.log(error);
      });
     },

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

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
// import About from '../components/About.vue'
import CreateTask from '@/components/createTask.vue'
import Lists from '@/components/lists.vue'


Vue.use(Router)

export default new Router({
	mode:'history',
	base:__dirname,
  	routes: [
    {
      path: '/home',
      name: 'Home',
      component:Home
    },
    //{
    // 	path:'/about',
    // 	name:'about',
    // 	component:About
    // },
    {
      path:"/createTask",
      name:"CreateTask",
      component:CreateTask
    },{
      path:'/lists',
      name:'Lists',
      component:Lists
    },
    {
    	path:'/',
    	redirect: '/home'
    }
  ]
})

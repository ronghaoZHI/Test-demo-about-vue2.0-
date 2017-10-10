import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/about'
import Customers from '@/components/customers'

Vue.use(Router)

export default new Router({
	mode:'history',
	base:__dirname,
  	routes: [
    {
      path: '/',
      name: 'Customers',
      // component: HelloWorld
      component:Customers
    },{
    	path:'/about',
    	name:'About',
    	component:About
    },{
    	path:'/customers',
    	redirect: '/'
    }
  ]
})

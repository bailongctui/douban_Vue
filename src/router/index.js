import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
    	path: '/pages',
      	component: PagesView,
      	children: [
      		{
	          path: '',
	          redirect: '/pages/home'
        	}
      	]
    }
  ]
})

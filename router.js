import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/'
import Cards from './pages/cards'
import Detail from './pages/detail'
import Login from './pages/login'
import Registration from './pages/registration'

Vue.use(Router)

export function createRouter () {
  return new Router({

    mode: 'history',
    routes: [
      {
        name: 'cards',
        path: '/cards',
        component: Cards
      },
      {
        name: 'detail',
        path: '/:id',
        component: Detail
      },
      {
        name: 'login',
        path: '/login',
        component: Login
      },
      {
        name: 'registration',
        path: '/registration',
        component: Registration
      },
      {
        name: 'home',
        path: '/',
        component: Home
      }
    ]
  })
}

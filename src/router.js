import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Apply from './views/agent/Apply'
import BindPhone from './views/agent/BindPhone'
import Becomes from './views/agent/Becomes'
import Register from './views/agent/Register'
import ApplyComplete from './views/agent/ApplyComplete'
import Agent from './views/agent/Agent'
import AgentInfo from './views/agent/AgentInfo'
import Order from './views/agent/Order'
import Earnings from './views/agent/Earnings'
import Withdraw from './views/agent/Withdraw'
import WithdrawInfo from './views/agent/WithdrawInfo'
import Bill from './views/agent/Bill'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/bind_phone',
      name: 'BindPhone',
      component: BindPhone
    },
    {
      path: '/becomes',
      name: 'Becomes',
      component: Becomes
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/apply_complete',
      name: 'ApplyComplete',
      component: ApplyComplete
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent,
      children: [
        {
          path: ':type/agent_info',
          component: AgentInfo
        }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/salary',
      name: 'Earnings',
      component: Earnings
    },
    {
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/withdraw_info',
      name: 'WithdrawInfo',
      component: WithdrawInfo
    },
    {
      path: '/bill',
      name: 'Bill',
      component: Bill
    },
  ]
})

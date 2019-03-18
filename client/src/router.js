import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('./views/Start.vue'),
      children: [
        {
          path: '/choose-car',
          name: 'chooseCar',
          component: () => import('./components/ChooseCar.vue')
        }
      ]
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue')
  },
    {
      path: '/bookings',
      name: 'bookings',
      component: () => import('./views/Bookings.vue')
    },

    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./views/Edit.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue'),
    },
    {
      path: '/create-user',
      name: 'createUser',
      component: () => import('./components/CreateUser.vue')
    }
  ]
})

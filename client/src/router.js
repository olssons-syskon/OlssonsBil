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
      component: () => import('./views/Admin.vue')/* ,
      children: [{
        path: '/edit',
        name: 'editCar',
        component: () => import('./view/Edit.vue')
      }
    ] */},
    {
      path: '/bookings',
      name: 'bookings',
      component: () => import('./views/Bookings.vue')
    },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('./views/Edit.vue')
  }
]
})

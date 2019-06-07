import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import(
        /* webpackChunkName: 'dashboard' */
        './components/Dashboard.vue'),
      children: [
        {
          path: 'create',
          name: 'DashboardCreate',
          component: () => import(
            /* webpackChunkName: 'create-issue' */
            './components/CreateIssue.vue')
        },
        {
          path: 'edit/:id',
          name: 'DashboardEdit',
          props: true,
          component: () => import(
            /* webpackChunkName: 'create-issue' */
            './components/CreateIssue.vue')
        }
      ]
    },
    {
      path: '/user/add',
      name: 'UserAdd',
      component: () => import(
        /* webpackChunkName: 'user' */
        './components/Users.vue')
    },
    {
      path: '/user/update/:id',
      name: 'UserEdit',
      component: () => import(
        /* webpackChunkName: 'user' */
        './components/Users.vue')
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(
        /* webpackChunkName: 'login' */
        './components/Login.vue')
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.name !== 'Login') {
    axios.post('/authentication')
    .then(function (response) {
      store.commit('setUser', response.data.user)
      store.commit('setMenu', true)
      next()
    })
    .catch(function (error) {
      console.log('Could not authenticate user', error);
      router.push({ name: 'Login' })
    });
  } else {
    store.commit('setMenu', false)
    next()
  }
})

export default router

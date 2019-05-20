import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import(
        /* webpackChunkName: 'dashboard' */
        './components/Dashboard.vue')
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
  const accessToken = window.localStorage.getItem('accessToken')
  // console.log(to.name)
  if (to.name !== 'Login') {
    axios.post('/authentication', null, {
      headers: {
        'Authorization': accessToken
      }
    })
    .then(function (response) {
      next()
    })
    .catch(function (error) {
      console.log('Could not authenticate user', error);
      router.push({ name: 'Login' })
    });
  } else {
    next()
  }
})

export default router

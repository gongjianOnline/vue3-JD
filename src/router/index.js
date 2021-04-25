import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName:"home" */ '../views/home/Home.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName:"shop" */ '../views/shop/Shop.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName:"login" */ '../views/login/Login.vue'),
    beforeEnter (to, form, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName:"register" */ '../views/register/Register.vue'),
    beforeEnter (to, form, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, form, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router

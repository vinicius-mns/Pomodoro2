import { createRouter, createWebHistory } from 'vue-router'
import dinamicPage from '@/views/dinamicPage/dinamicPage.vue'
import HandleDate from '@/utils/dates'

const today = new HandleDate().toDay

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:dia',
      name: 'day',
      component: dinamicPage,
    },
    {
      path: '/',
      redirect: `/${today}`
    },
  ]
})
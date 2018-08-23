import Vue from 'vue'
import Router from 'vue-router'
import QiitaReaderPage from '@/components/QiitaReaderPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QiitaReaderPage',
      component: QiitaReaderPage
    }
  ]
})

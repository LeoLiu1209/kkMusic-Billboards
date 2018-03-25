import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import kkmusic from '@/components/kkmusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path : '/getHitPlayLists',
      name: 'getHitPlayLists',
      component : kkmusic
    }
  ]
})

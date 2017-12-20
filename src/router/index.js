import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Contacto from '@/components/Components/Contacto'
import Intro from '@/components/Dashboard/Layout/Intro'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HelloWorld,
      meta: { title: 'MaterialVue - Hello',
      progress: {
      func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '.5s', opacity: '0.6s', termination: 600}}
          ]
        }
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: { title: 'MaterialVue - Home',
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '.5s', opacity: '0.6s', termination: 600}}
        ]
      }
    }
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto,
      meta: { title: 'MaterialVue - Contacto',
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '.5s', opacity: '0.6s', termination: 600}}
        ]
      }
     }
    },
    {
      path: '/introducion',
      name: 'Introdución',
      component: Intro,
      meta: { title: 'MaterialVue - Introdución',
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '.5s', opacity: '0.6s', termination: 600}}
        ]
      }
     }
    }
  ]

})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});
export default router
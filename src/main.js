// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import Home from './components/Home'
import Contacto from './components/Contacto'
import DashboardLayout from './components/Dashboard/Layout/DashboardLayout.vue'
import DashboardContent from './components/Dashboard/Layout/Contect.vue'
import DashboardAside from './components/Dashboard/Layout/Aside.vue'
import DashboardFooter from './components/Dashboard/Layout/Footer.vue'


   


Vue.component('home', Home)
Vue.component('contacto', Contacto)
Vue.component('dashcontent',DashboardContent)
Vue.component('dashlayout',DashboardLayout)
Vue.component('dashaside',DashboardAside)
Vue.component('dashfooter',DashboardFooter)


Vue.config.productionTip = false

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}
Vue.use(VueProgressBar, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NotLoginHome from './components/NotLoginHome.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import UserList from './components/UserList.vue'
import MessageList from './components/MessageList.vue'
import User from './components/User.vue'
import Profile from './components/Profile.vue'
import './components/firebaseInit'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path:'/NotLoginHome' , component: NotLoginHome },
    { path:'/' , component: NotLoginHome },
    { path:'/Login' , component: Login },
    { path:'/Home' , component: Home },
    { path:'/UserList' , component: UserList },
    { path:'/MessageList' , component: MessageList },
    { path:'/User/:mAuthID' , component: User },
    { path:'/Profile' , component: Profile },

  ],
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

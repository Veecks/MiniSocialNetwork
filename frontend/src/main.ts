import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
import Chat from './views/Chat.vue';
import Profile from './views/Profile.vue';

const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/search', component: Search, name: 'search'},
  {path: '/chat', component: Chat, name: 'chat'},
  {path: '/profile', component: Profile, name: 'profile'},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

const app = createApp(App)
  app.use(router)
  app.mount('#app')
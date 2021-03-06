import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Register from "../components/Register.vue";
import Lobby from "../components/Lobby.vue";
import Game from "../components/Game.vue";
import Waiting from "../components/WaitingRoom.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/",
        name: "Register",
        component: Register
      },
      {
        path: "/lobby",
        name: "Lobby",
        component: Lobby
      },
      {
        path: "/waiting/:id",
        name: "Waiting",
        component: Waiting
      },
      {
        path: "/game/:id",
        name: "Game",
        component: Game
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

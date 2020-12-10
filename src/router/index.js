import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Trainee_list from "../views/Trainee_list";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/traineelist",
    name: "Trainee List",
    component: Trainee_list,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

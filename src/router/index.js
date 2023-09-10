import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PeopleView from "../views/PeopleView.vue";
import PublicationsView from "../views/PublicationsView.vue";
import JoinView from "../views/JoinView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,

    },
    {
      path: "/people",
      name: "people",
      component: PeopleView,
    },
    {
      path: "/publications",
      name: "publications",
      component: PublicationsView,
    },
    {
      path: "/join",
      name: "join",
      component: JoinView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";

import BarsView from "./views/BarsView.vue";
import BreweriesView from "./views/BreweriesView.vue";
import HomeView from "./views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: BreweriesView,
      path: "/breweries",
    },
    {
      component: BarsView,
      path: "/bars",
    },
    {
      component: HomeView,
      path: "/",
    },
  ],
});

export default router;

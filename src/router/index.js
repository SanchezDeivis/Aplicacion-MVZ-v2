import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "inicio",
    component: () => import( /* webpackChunkName: "inicio" */ "../views/Inicio.vue"),
  },
  {
    path: "/filtrovistas",
    name: "filtrovistas",
    component: () => import( /* webpackChunkName: "filtrovistas" */ "@/views/VistaFiltroVisita.vue"),
  },
  {
    path: "/estadisticas",
    name: "estadisticas",
    component: () =>
      import( /* webpackChunkName: "estadisticas" */ "@/views/Estadisticas.vue"),
  },
  {
    path: "/vista_detallada/:id",
    name: "vista_detallada",
    component: () =>
      import( /* webpackChunkName: "Fotos" */ "../views/VistasDetalladas.vue"),

  },
  {
    path: "/about",
    name: "about",
    component: () => import( /* webpackChunkName: "About" */ "@/views/About.vue"),
  },

  // {
  //   path: "/fotos",
  //   name: "fotos",
  //   component: () =>
  //     import( /* webpackChunkName: "Fotos" */ "../views/Fotos.vue"),
  // }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
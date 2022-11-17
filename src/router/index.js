import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import ErrorPage from "../views/ErrorPage.vue";
import CarInfo from "../components/cars/CarInfo.vue";
import EachCar from "../components/cars/EachCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "ApoutView",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/view/car/:carType",
    name: "EacCar",
    component: EachCar,
  },
  {
    path: "/view/car/:carName/:carFileId",
    name: "carInfo",
    component: CarInfo,
  },
  {
    path: "/categories",
    name: "CategoriesView",
    component: CategoriesView,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //console.log (to);
  //console.log (from);
  let documentTitle = `${process.env.VUE_APP_TITLE}`;
  if (to.params.pagetitle) {
    documentTitle += ` | ${to.params.pagetitle}`;
  }
  document.title = documentTitle;
  next();
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  /**
   *首页-----------------------------------------------
   */
  { path: "/home", name: "Home", component: () => import("@v/home/Home.vue") },
  /**
   *产品分类-----------------------------------------------
   */
  { path: "/category", name: "Category", component: () => import("@v/category/Category.vue") },
  /**
   *企业介绍-----------------------------------------------
   */
  { path: "/introduction", name: "Introduction", component: () => import("@v/introduction/Introduction.vue") },
  /**
   *联系我们-----------------------------------------------
   */
  { path: "/contact", name: "Contact", component: () => import("@v/contact/Contact.vue") }
];

const router = new VueRouter({
  routes
});

export default router;

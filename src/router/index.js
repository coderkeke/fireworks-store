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
  {
    path: "/home",
    meta: {
      isNavigation: true
    },
    name: "Home",
    component: () => import("@v/home/Home.vue")
  },
  /**
   *产品分类-----------------------------------------------
   */
  {
    path: "/category",
    meta: {
      isNavigation: true
    },
    name: "Category",
    component: () => import("@v/category/Category.vue")
  },
  /**
   *企业介绍-----------------------------------------------
   */
  {
    path: "/introduction",
    meta: {
      isNavigation: true
    },
    name: "Introduction",
    component: () => import("@v/introduction/Introduction.vue")
  },
  /**
   *联系我们-----------------------------------------------
   */
  {
    path: "/contact",
    meta: {
      isNavigation: true
    },
    name: "Contact",
    component: () => import("@v/contact/Contact.vue")
  },
  /**
   *在线视频播放-----------------------------------------------
   */
  {
    path: "/videoPlay",
    meta: {
      isNavigation: false
    },
    name: "VideoPlay",
    component: () => import("@v/videoPlay/VideoPlay.vue")
  },
  /**
   *产品详情-----------------------------------------------
   */
  {
    path: "/productDetails",
    meta: {
      isNavigation: false
    },
    name: "ProductDetails",
    component: () => import("@v/productDetails/ProductDetails.vue")
  },
  /**
   *产品总列表-----------------------------------------------
   */
  {
    path: "/proAllList",
    meta: {
      isNavigation: false
    },
    name: "ProAllList",
    component: () => import("@v/proAllList/ProAllList.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

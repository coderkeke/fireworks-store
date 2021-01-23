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
      isNavigation: false,
      noKeep: true
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
   *图片页-----------------------------------------------
   */
  {
    path: "/proPicture",
    meta: {
      isNavigation: false
    },
    name: "ProPicture",
    component: () => import("@v/productDetails/components/ProPicture.vue")
  },
  /**
   *产品总列表-----------------------------------------------
   */
  {
    path: "/proAllList",
    meta: {
      isNavigation: false,
      noKeep: true
    },
    name: "ProAllList",
    component: () => import("@v/proAllList/ProAllList.vue")
  },
  /**
   *总产品列表-----------------------------------------------
   */
  {
    path: "/allProList",
    meta: {
      isNavigation: false
    },
    name: "AllProList",
    component: () => import("@v/allProList/AllProList.vue")
  },
  /**
   *我的列表-----------------------------------------------
   */
  {
    path: "/profile",
    meta: {
      isNavigation: false
    },
    name: "Profile",
    component: () => import("@v/profile/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path == "/productDetails" || to.path == "/videoPlay") {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 };
    } else {
      return savedPosition;
    }
  }
});

export default router;

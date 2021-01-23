import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/beforeEach";

//vant--------------------------------------------
import Vant from "vant";

import "vant/lib/index.less";
Vue.use(Vant);

//样式初始化--------------------------------------------
import "@/assets/css/normalize.css";

//amfe-flexible插件-------------------------------------------
import "amfe-flexible";
Vue.prototype.bus = new Vue();
Vue.config.productionTip = false;

export const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//vant--------------------------------------------
import Vant from "vant";

import "vant/lib/index.less";
Vue.use(Vant);

// 移动端播放器
import vueMiniPlayer from "vue-mini-player";
import "vue-mini-player/lib/vue-mini-player.css";
Vue.use(vueMiniPlayer);

//样式初始化--------------------------------------------
import "@/assets/css/normalize.css";

//amfe-flexible插件-------------------------------------------
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

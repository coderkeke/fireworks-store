import router from "./index";
import { getQrCode, scanCode } from "@/api";
import store from "../store/index";

router.beforeEach((to, from, next) => {
  if (!store.state.userInfo && !to.query.code) {
    login();
  }

  if (to.query.code) {
    const params = {
      code: to.query.code
    };
    // scanCode(params).then(res => {
    //   if (res.state == 100) {
    //     store.commit("SET_USER_INFO", res.items);
    //   }
    // });
  }

  next();
});

function login() {
  const params = {
    url: location.pathname,
    uuid: store.state.shopUuid
  };
  getQrCode(params).then(res => {
    console.log(res);
    if (res.state == 100) {
      let { url } = res.items;
      window.location.href = url;
    }
  });
}

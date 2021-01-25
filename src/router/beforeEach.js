import router from "./index";
import { getQrCode, scanCode } from "@/api";
import store from "../store/index";

router.beforeEach((to, from, next) => {
  const { shopUuid, code } = to.query;
  console.log(shopUuid);
  if (!store.state.userInfo && !code) {
    login();
  }

  if (code) {
    const params = {
      code
    };
    scanCode(params).then(res => {
      if (res.state == 100) {
        store.commit("SET_USER_INFO", res.items);
        localStorage.setItem("appUser", res.items.uuid);
      }
    });
  }

  if (shopUuid) {
    store.commit("SET_SHOP_UUID", shopUuid);
  }

  next();
});

// 登陆
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

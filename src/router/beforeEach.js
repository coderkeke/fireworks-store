import router from "./index";
import { getQrCode, scanCode } from "@/api";
import store from "../store/index";

router.beforeEach((to, from, next) => {
  const { shopUuid, code, uuid } = to.query;

  if (!store.state.userInfo && !code) {
    login(shopUuid, uuid);
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
function login(shopUuid, uuid) {
  const params = {
    url: location.pathname,
    shopUuid,
    uuid
  };
  getQrCode(params).then(res => {
    console.log(res);
    if (res.state == 100) {
      let { url } = res.items;
      window.location.href = url;
    }
  });
}

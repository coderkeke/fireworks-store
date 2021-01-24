import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopUuid: "33b95da4324e4c10a87ce1de186e6307",
    proActive: null,
    userInfo: null,
    // 微信code
    code: null
  },
  mutations: {
    SET_SHOP_UUID: (state, shopUuid) => {
      state.shopUuid = shopUuid;
    },
    SET_PRO_ACTIVE: (state, active) => {
      state.proActive = active;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_USER_CODE: (state, code) => {
      state.code = code;
    }
  },
  actions: {},
  modules: {}
});

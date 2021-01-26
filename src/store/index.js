import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopUuid: "",
    proActive: null,
    userInfo: null,
    // 微信code
    code: null,
    // 头部log路径
    headUrl: ""
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
    },
    SET_HEADE_URL: (state, headUrl) => {
      state.headUrl = headUrl;
    }
  },
  actions: {},
  modules: {}
});

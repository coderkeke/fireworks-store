import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopUuid: ""
  },
  mutations: {
    SET_SHOP_UUID: (state, shopUuid) => {
      state.shopUuid = shopUuid;
    }
  },
  actions: {},
  modules: {}
});

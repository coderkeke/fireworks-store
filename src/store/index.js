import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shopUuid: "33b95da4324e4c10a87ce1de186e6307",
    proActive: null
  },
  mutations: {
    SET_SHOP_UUID: (state, shopUuid) => {
      state.shopUuid = shopUuid;
    },
    SET_PRO_ACTIVE: (state, active) => {
      state.proActive = active;
    }
  },
  actions: {},
  modules: {}
});

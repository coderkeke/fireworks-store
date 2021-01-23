<template>
  <div id="app">
    <keep-alive v-if="!$route.meta.noKeep">
      <router-view />
    </keep-alive>
    <router-view v-else />
    <Navigation v-if="$route.meta.isNavigation" />
  </div>
</template>

<script>
import Navigation from "@c/navigation/Navigation.vue";
import { getQrCode, scanCode } from "@/api";
export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      result: "465465"
    };
  },
  watch: {
    $route(newRoute) {
      const { shopUuid } = newRoute.query;
      if (shopUuid) {
        this.$store.commit("SET_SHOP_UUID", shopUuid);
      }
    }
  },
  created() {
    this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem("beforeunload"))));
    window.addEventListener("beforeunload", () => {
      let state = JSON.stringify(this.$store.state);
      localStorage.setItem("beforeunload", state);
    });

    if (!this.$store.state.userInfo) {
      this.login();
    }
  },

  methods: {
    login() {
      const params = {
        url: location.pathname,
        uuid: this.$store.state.shopUuid
      };
      getQrCode(params).then(res => {
        if (res.state == 100) {
          let { url } = res.items;
          // window.location.href = url;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>

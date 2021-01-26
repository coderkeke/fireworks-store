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
import { getFileList } from "@/api";
export default {
  name: "App",
  components: {
    Navigation
  },
  watch: {
    $route(newRoute) {
      const { shopUuid } = newRoute.query;
      if (shopUuid) {
        this.$store.commit("SET_SHOP_UUID", shopUuid);
        this.getFileList(shopUuid);
      }
    }
  },
  created() {
    this.getFileList();
    this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem("beforeunload"))));
    window.addEventListener("beforeunload", () => {
      let state = JSON.stringify(this.$store.state);
      localStorage.setItem("beforeunload", state);
    });
  },
  methods: {
    // 获取列表数据
    getFileList(shopUuid) {
      const params = {
        page: 0,
        pageSize: 0,
        typeName: "deLogoRectangle",
        parentUuid: shopUuid || this.$store.state.shopUuid
      };
      getFileList(params).then(res => {
        console.log(res.items[0], "21321");
        if (res.state == 100) {
          this.$store.commit("SET_HEADE_URL", res.items[0].filePath);
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

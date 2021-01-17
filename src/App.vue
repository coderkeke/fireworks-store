<template>
  <div id="app">
    <router-view />
    <Navigation v-if="$route.meta.isNavigation" />
  </div>
</template>

<script>
import Navigation from "@c/navigation/Navigation.vue";
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
      }
    }
  },
  created() {
    this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem("beforeunload"))));
    window.addEventListener("beforeunload", () => {
      let state = JSON.stringify(this.$store.state);
      localStorage.setItem("beforeunload", state);
    });
  }
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>

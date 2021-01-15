<template>
  <div id="app">
    <router-view />
    <Navigation v-if="$route.meta.isNavigation" />``
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
      console.log(newRoute);
    }
  },
  created() {
    const { shopUuid } = this.$route.query;
    if (shopUuid) {
      this.$store.commit("SET_SHOP_UUID", shopUuid);
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

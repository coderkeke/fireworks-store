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
      console.log(newRoute);
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  margin-bottom: 60px;
}
</style>

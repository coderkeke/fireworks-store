<template>
  <div id="app">
    <router-view />
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@c/navigation/Navigation.vue";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="less" scoped>
#app {
  margin-bottom: 60px;
}
</style>

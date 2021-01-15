<template>
  <div class="container">
    <div class="top-nav-bar">
      <TopNavBar />
    </div>

    <!-- 轮播 -->
    <div class="pro-type">
      <ProTypeList />
    </div>

    <div class="pro-content-list">
      <RecommendList />
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import ProTypeList from "./components/ProTypeList.vue";
import RecommendList from "./components/RecommendList.vue";
export default {
  name: "ProAllList",
  components: {
    TopNavBar,
    ProTypeList,
    RecommendList
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 100px;

  padding-top: 60px;
  &::before {
    content: "";
    display: table;
  }

  .top-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
  }

  .pro-type {
    width: 100vw;
    overflow: hidden;
  }

  .pro-content-list {
    width: 100vw;
  }
}
</style>

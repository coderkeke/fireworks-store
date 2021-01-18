<template>
  <div class="introduction-container">
    <!-- 头部 -->
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <!-- 轮播图 -->
    <Swipe typeName="deCompanyProfileFirst" />
    <!-- 图片展示 -->
    <ImageList />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "@/components/common/Swipe.vue";
import ImageList from "./components/ImageList.vue";
export default {
  name: "Introduction",
  components: {
    TopNavBar,
    Swipe,
    ImageList
  }
};
</script>

<style lang="less" scoped>
.introduction-container {
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
}
</style>

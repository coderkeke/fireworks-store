<template>
  <div class="introduction-container">
    <!-- 头部 -->
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <!-- 轮播图 -->
    <Swipe typeName="deCompanyProfileFirst" />
    <div class="title">
      <img src="@/assets/img/home/recommend.png" alt="" />
      <span>企业图片</span>
    </div>
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

  .title {
    background: #ffffff;
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0;

    & > img {
      width: 20px;
      height: 20px;
      margin: 0 8px 0 28px;
    }

    & > span {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #323232;
      line-height: 10px;
    }
  }
}
</style>

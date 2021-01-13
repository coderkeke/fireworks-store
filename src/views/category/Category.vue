<template>
  <div class="category-container">
    <!-- 头部 -->
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <!-- 轮播图 -->
    <Swipe typeName="deProCategories"/>
    <!-- 搜索 -->
    <SearchBox />
    <!-- 分类列表-->
    <CategoryList />

    <div class="footer-img">
      <img src="~@/assets/img/category/footerImg.png" alt="" />
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "@/components/common/Swipe.vue";
import SearchBox from "./components/SearchBox.vue";
import CategoryList from "./components/CategoryList.vue";
export default {
  name: "Category",
  components: {
    TopNavBar,
    Swipe,
    SearchBox,
    CategoryList
  }
};
</script>

<style lang="less" scoped>
.category-container {
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

  .footer-img {
    width: 230px;
    height: 42px;
    margin: 38px auto 35px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

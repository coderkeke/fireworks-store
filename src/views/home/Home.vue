<template>
  <div class="home-container">
    <!-- 头部 -->
    <TopNavBar />
    <!-- 轮播图 -->
    <Swipe />
    <!-- 搜索 -->
    <SearchBox />
    <!-- 图片展示 -->
    <ImageList />
    <!-- 推荐产品 -->
    <RecommendList />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "./components/Swipe.vue";
import SearchBox from "./components/SearchBox.vue";
import ImageList from "./components/ImageList.vue";
import RecommendList from "./components/RecommendList.vue";
export default {
  name: "Home",
  components: {
    TopNavBar,
    Swipe,
    SearchBox,
    ImageList,
    RecommendList
  },
  mounted() {
    this.payOrder();
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 100px;
}
</style>

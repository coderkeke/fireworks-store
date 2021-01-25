<template>
  <div class="home-container">
    <!-- 头部 -->
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <!-- 轮播图 -->
    <Swipe typeName="deShopCarousel" />
    <!-- 搜索 -->
    <SearchBox />
    <!-- 图片展示 -->
    <ImageList />
    <!-- 推荐产品 -->
    <RecommendList />
  </div>
</template>

<script>
import { shopAddOne } from "@/api";
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "@/components/common/Swipe.vue";
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
  mounted() {},
  created() {
    this.shopAddOne();
  },
  methods: {
    shopAddOne() {
      const params = {
        uuid: this.$store.state.shopUuid
      };
      shopAddOne(params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
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

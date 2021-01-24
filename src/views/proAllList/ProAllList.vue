<template>
  <div class="container">
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <!-- 轮播 -->
    <div class="pro-type">
      <ProTypeList />
    </div>

    
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
      <div class="pro-content-list">
        <RecommendList @refreshScroll="refreshScroll" />
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from "@c/scroll/Scroll.vue";
import TopNavBar from "./components/TopNavBar.vue";
import ProTypeList from "./components/ProTypeList.vue";
import RecommendList from "./components/RecommendList.vue";
export default {
  name: "ProAllList",
  components: {
    TopNavBar,
    ProTypeList,
    RecommendList,
    scroll
  },
  methods: {
    //监听滚动事件
    contentScroll(position) {
      //1.判断BackTop是否显示
      // this.isShowBackTop = -position.y > BACKTOP_DISTANCE;
      //2.觉得tabControl是否吸顶
      // this.isTabFixed = -position.y > this.tabControl;
    },
    //加载更多
    loadMore() {
      // this.getHomeGoods(this.currentType);
    },
    // 刷新
    refreshScroll() {
      console.log(789);
      this.$nextTick(() => {
        console.log(4564);
        this.$refs.scroll.refresh();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  overflow: hidden;
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

  .content {
    overflow: hidden;
    height: calc(100vh - 170px);

    .pro-content-list {
      padding-bottom: 30px;
    }
  }
}
</style>

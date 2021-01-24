<template>
  <div class="container">
    <div class="top-nav-bar">
      <TopNavBar>{{ title }}</TopNavBar>
    </div>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
      <div class="pro-content-list">
        <RecommendList @handleDelete="handleDelete" :proList="proList" :disabled="disabled" :type="type" @refreshScroll="refreshScroll" />
      </div>
    </scroll>
  </div>
</template>

<script>
import { getProList, getCollList, getFootprint, reCollection } from "@/api";
import scroll from "@c/scroll/Scroll.vue";
import TopNavBar from "./components/TopNavBar.vue";
import RecommendList from "./components/RecommendList.vue";
export default {
  name: "ProList",
  components: {
    TopNavBar,
    RecommendList,
    scroll
  },
  data() {
    return {
      title: "镇店之宝",
      type: 0,
      proList: [],
      disabled: false,
      // 0收藏 1喜欢
      likColl: 0
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      const { type } = this.$route.query;
      switch (parseInt(type)) {
        case 0:
          this.title = "镇店之宝";
          this.type = 0;
          this.getProList();
          this.disabled = false;
          break;
        case 1:
          this.title = "我的喜欢";
          this.type = 1;
          this.likColl = 1;
          this.getCollList();
          this.disabled = false;
          break;
        case 2:
          this.title = "我的收藏";
          this.type = 2;
          this.likColl = 0;
          this.getCollList();
          this.disabled = false;
          break;
        case 3:
          this.title = "我的足迹";
          this.type = 3;
          this.getFootprint();
          this.disabled = true;
          break;
      }
    },

    // 镇店之宝
    getProList() {
      const params = {
        isOn: 0,
        page: 1,
        pageSize: 10,
        shopUuid: this.$store.state.shopUuid
      };
      getProList(params).then(res => {
        if (res.state == 100) {
          this.proList = res.items.filter(item => item.zhenDian == 1);
          this.refreshScroll();
        }
      });
    },

    // 0收藏1喜欢
    getCollList() {
      const params = {
        likColl: this.likColl,
        page: 0,
        pageSize: 0,
        shopUuid: this.$store.state.shopUuid
      };
      getCollList(params).then(res => {
        if (res.state == 100) {
          this.proList = res.items;
          this.refreshScroll();
        }
      });
    },

    // 足迹
    getFootprint() {
      const params = {
        page: 0,
        pageSize: 0,
        shopUuid: this.$store.state.shopUuid
      };
      getFootprint(params).then(res => {
        if (res.state == 100) {
          this.proList = res.items;
          this.refreshScroll();
        }
      });
    },

    // 删除
    handleDelete(info) {
      const data = {
        likColl: this.likColl,
        prtUuid: info.uuid
      };
      reCollection().then(res => {
        if (res.state == 100) {
          this.init();
        }
      });
    },

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
    refreshScroll() {
      this.$nextTick(() => {
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
    padding-top: 7px;
    overflow: hidden;
    height: calc(100vh - 170px);

    .pro-content-list {
      padding-bottom: 30px;
    }
  }
}
</style>

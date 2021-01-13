<template>
  <div ref="container_box" class="container_box">
    <!-- 头部 -->
    <van-sticky :offset-top="0" z-index="10000" class="nav-top">
      <TopNavBar />
    </van-sticky>
    <!--vant van-swipe 滑动组件 -->
    <van-swipe :show-indicators="false" @change="onChange" vertical :loop="false">
      <van-swipe-item v-for="(item, index) in videoList" :key="index">
        <vueMiniPlayer :key="item.uuid" v-if="videoIndex == index" ref="vueMiniPlayer" :video="item" :mutex="true" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import TopNavBar from "./components/TopNavBar.vue";
import { getFileList } from "@/api";
export default {
  name: "videoChild",
  components: {
    TopNavBar
  },
  data() {
    return {
      videoIndex: 0,
      videoList: [],
      // 数据uuid
      uuid: ""
    };
  },

  created() {
    const { shopUuid, uuid } = this.$route.query;
    if (shopUuid) {
      this.$store.commit("SET_SHOP_UUID", shopUuid);
    }
    this.uuid = uuid;
    this.initVideoList();
  },
  methods: {
    initVideoList() {
      this.getFileList();
    },

    // 获取列表数据
    getFileList() {
      const params = {
        page: 1,
        pageSize: 1,
        typeName: "prtVideo",
        parentUuid: this.uuid
      };
      getFileList(params).then(res => {
        this.videoList = res.items.map(item => {
          const obj = {
            muted: false,
            loop: false,
            preload: "auto",
            poster: "",
            volume: 1,
            autoplay: true,
            mutex: true,
            playsinline: true,
            controls: true,
            url: item.filePath,
            name: item.fileName,
            ...item
          };
          return obj;
        });

        console.log(this.videoList);
      });
    },

    //滑动改变播放的视频
    onChange(index) {
      this.videoIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
.container_box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .nav-top {
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
  }

  .van-swipe {
    position: absolute;
    top: 60px;
    width: 100%;
    height: calc(100vh - 60px);
    overflow: hidden;

    .van-swipe-item {
      width: 100%;
      height: calc(100vh - 60px);
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>

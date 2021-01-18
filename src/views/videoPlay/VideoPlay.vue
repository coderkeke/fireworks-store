<template>
  <div ref="container_box" class="container_box">
    <!--vant van-swipe 滑动组件 -->
    <div class="top-nav">
      <img @click="goBack(1)" width="28px" height="28px" src="~@/assets/img/videoPlay/back.png" alt="" />
      <img @click="goBack(2)" width="28px" height="28px" src="~@/assets/img/videoPlay/home.png" alt="" />
    </div>
    <van-swipe v-if="videoList.length !== 0" :show-indicators="false" @change="onChange" vertical :loop="false">
      <van-swipe-item v-for="(item, index) in videoList" :key="index">
        <video
          id="video"
          class="video_box"
          :src="item.filePath"
          poster
          width="100%"
          height="100%"
          controls
          autoplay="autoplay"
          webkit-playsinline="true"
          playsinline="true"
          preload="true"
          x5-video-player-type="h5-page"
          x5-video-player-fullscreen="false"
        ></video>
      </van-swipe-item>
    </van-swipe>

    <div class="product-item" v-if="videoList.length == 0 && loading"><span>暂无视频</span></div>
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
      uuid: "",
      loading: false
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
        page: 0,
        pageSize: 0,
        typeName: "prtVideo",
        parentUuid: this.uuid
      };
      getFileList(params).then(res => {
        this.videoList = res.items;
        this.loading = true;
      });
    },

    //滑动改变播放的视频
    onChange(index) {
      this.videoIndex = index;
    },

    goBack(type) {
      switch (type) {
        case 1:
          if (window.history.length <= 1) {
            this.$router.push({ name: "ProductDetails", query: { uuid: this.uuid } });
          } else {
            this.$router.go(-1);
          }
          break;
        case 2:
          this.$router.push({ name: "Home" });
          break;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container_box {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .top-nav {
    width: 100%;
    height: 30px;
    padding: 0 20px;
    position: fixed;
    top: 20px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .van-swipe {
    width: 100%;
    height: 100vh;

    .van-swipe-item {
      width: 100%;
      height: 100vh;

      .video_box {
        width: 100%;
        height: 100vh;
      }
    }
  }

  .product-item {
    width: 361px;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & > span {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 700;
      color: #969696;
    }
  }
}
</style>

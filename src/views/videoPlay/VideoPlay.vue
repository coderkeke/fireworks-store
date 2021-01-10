<template>
  <div ref="container_box" class="container_box">
    <!-- 头部 -->
    <van-sticky :offset-top="0" z-index="10000" class="nav-top">
      <TopNavBar />
    </van-sticky>
    <!--vant van-swipe 滑动组件 -->
    <van-swipe :show-indicators="false" @change="onChange" vertical :loop="false">
      <van-swipe-item v-for="(item, index) in videoList" :key="index">
        <vueMiniPlayer v-if="videoIndex == index" ref="vueMiniPlayer" :video="item" :mutex="true" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import TopNavBar from "./components/TopNavBar.vue";
export default {
  name: "videoChild",
  components: {
    TopNavBar
  },
  data() {
    return {
      videoIndex: 0,
      videoList: [
        {
          url: "https://video.pearvideo.com/mp4/third/20201113/cont-1706821-15126082-111655-hd.mp4",
          name: "智.混动"
        },
        {
          url: "https://video.pearvideo.com/mp4/third/20201114/cont-1707004-15488237-105621-hd.mp4",
          name: "用jio看世界，发现更多乐趣"
        },
        {
          url: "https://video.pearvideo.com/mp4/third/20201117/cont-1707360-15126082-105138-hd.mp4",
          name: "三维"
        },

        {
          url: "https://video.pearvideo.com/mp4/third/20201111/cont-1706407-15488237-112532-hd.mp4",
          name: "世界关节炎日 MoveFree奶奶的约定"
        },
        {
          url: "https://video.pearvideo.com/mp4/third/20201124/cont-1708555-15126082-104309-hd.mp4",
          name: "黑无节，是他们的限定狂欢日"
        },
        {
          url: "https://video.pearvideo.com/mp4/third/20201124/cont-1708555-15126082-104309-hd.mp4",
          name: "懂咖啡，也懂你的小心思"
        }
      ]
    };
  },

  created() {
    this.initVideoList();
  },
  methods: {
    initVideoList() {
      const obj = {
        muted: false,
        loop: false,
        preload: "auto",
        poster: "",
        volume: 1,
        autoplay: true,
        mutex: true,
        playsinline: true,
        controls: true
      };
      this.videoList = this.videoList.map(item => {
        item = {
          ...item,
          ...obj
        };
        return item;
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

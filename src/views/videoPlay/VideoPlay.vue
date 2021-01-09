<template>
  <div class="container_box" id="video_box">
    <div class="van_swipe">
      <!--vant van-swipe 滑动组件 -->
      <van-swipe :show-indicators="false" @change="onChange" vertical :loop="false">
        <van-swipe-item v-for="(item, index) in videoList" :key="index" class="product_swiper">
          <div class="video_container">
            <video
              class="video_box"
              width="100%"
              height="100%"
              webkit-playsinline="true"
              x5-playsinline=""
              x5-video-player-type="h5"
              x5-video-player-fullscreen=""
              playsinline
              preload="auto"
              :poster="item.cover"
              :src="item.url"
              :playOrPause="playOrPause" 
              x-webkit-airplay="allow"
              x5-video-orientation="portrait"
              @click="pauseVideo"
              @ended="onPlayerEnded($event)"
              loop="loop"
            ></video>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: "videoChild",
  data() {
    let u = navigator.userAgent;
    return {
      current: 0,
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
      ],
      playOrPause: true,
      video: null,
      iconPlayShow: true,
      isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      loveCount: 0
    };
  },
  methods: {
    //滑动改变播放的视频
    onChange(index) {
      //改变的时候 暂停当前播放的视频
      let video = document.querySelectorAll("video")[this.current];
      video.pause();
      this.current = index;
      if (this.isiOS) {
        //ios切换直接自动播放下一个
        this.pauseVideo();
      } else {
        //安卓播放时重置显示封面。图标等
        this.iconPlayShow = true;
      }
    },
    loveCountRadom(count) {
      let arr = [12, 67, 34, 76.9, 12.9, 24, 1.9, 45, 4.6];
      return arr[count];
    },
    playvideo() {
      let video = document.querySelectorAll("video")[this.current];
      console.log(video.play());
      console.log("playvideo：" + this.current);
      this.iconPlayShow = false;
      video.play();
      window.onresize = function() {
        video.style.width = window.innerWidth + "px";
        video.style.height = window.innerHeight + "px";
      };
    },
    pauseVideo() {
      //暂停\播放
      let video = document.querySelectorAll("video")[this.current];
      console.log("pauseVideo" + this.current);
      this.loveCount = this.loveCountRadom(this.current);
      if (this.playOrPause) {
        video.pause();
        this.iconPlayShow = true;
      } else {
        video.play();
        this.iconPlayShow = false;
      }
      this.playOrPause = !this.playOrPause;
    },
    onPlayerEnded() {
      //视频结束
      this.current += this.current;
    }
  }
};
</script>
<style scoped>
.video-player {
  height: 100%;
  width: 100%;
}
.van_swipe {
  width: 100%;
  height: 100%;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.container_box {
  width: 100%;
  height: 660px;
}
.video_box {
  object-fit: cover !important;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
video {
  object-position: 0 0;
}
</style>

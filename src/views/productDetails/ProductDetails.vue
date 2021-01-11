<template>
  <div class="product-detail">
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <div class="pro-detail-top">
      <div class="pro-detail-img">
        <img width="100%" height="100%" src="~@/assets/img/videoPlay/home.png" alt="" />
        <img @click="goVideoPlay" class="video-play-icon" src="~@/assets/img/proDetails/play.png" alt="" />
      </div>
      <div class="pro-detail-btn">
        <div class="picture-btn">图片</div>
        <div @click="goVideoPlay" class="video-btn">视频</div>
      </div>
    </div>

    <div class="pro-detail-body">
      <span class="title">极品夜景组合恒飞系列</span>
      <span class="price">价格：面议</span>
      <div class="content">
        <div class="icon"></div>
        <span>类别：精品夜景系列</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>类别：精品夜景系列</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>类别：精品夜景系列</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>类别：精品夜景系列</span>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
export default {
  name: "ProductDetails",
  components: {
    TopNavBar
  },
  methods: {
    goVideoPlay() {
      this.$router.push({ name: "VideoPlay" });
    }
  }
};
</script>

<style lang="less" scoped>
.product-detail {
  background: #ffffff;
  height: 100vh;

  .top-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
  }

  .pro-detail-top {
    width: 375px;
    height: 375px;
    position: relative;
    &::before {
      content: "";
      display: table;
    }

    .pro-detail-img {
      width: 301px;
      height: 274px;
      margin: 0 auto;
      margin-top: 71px;
      position: relative;

      .video-play-icon {
        position: absolute;
        top: calc(50% - 24px);
        left: calc(50% - 24px);
        width: 48px;
        height: 48px;
      }
    }

    .pro-detail-btn {
      position: absolute;
      width: 100%;
      bottom: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      .picture-btn {
        width: 55px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        background: linear-gradient(90deg, #4d5af1 0%, #636fff 100%);
        border-radius: 15px;
        margin-right: 14px;
      }

      .video-btn {
        width: 55px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        background: linear-gradient(90deg, #b63cfb 0%, #ff3cf8 100%);
        border-radius: 15px;
      }
    }
  }

  .pro-detail-body {
    width: 375px;
    height: 350px;
    background: #ffffff;
    padding-left: 30px;
    padding-top: 27px;
    display: flex;
    flex-direction: column;

    .title {
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #323232;
    }

    .price {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ff1448;
      margin: 14px 0 18px;
    }

    .content {
      display: flex;
      align-items: center;
      margin: 10px;
      .icon {
        width: 8px;
        height: 8px;
        background: #4d5afd;
        border-radius: 50%;
        margin-right: 8px;
      }

      & > span {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
      }
    }
  }
}
</style>

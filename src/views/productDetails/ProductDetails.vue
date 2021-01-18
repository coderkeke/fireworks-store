<template>
  <div class="product-detail">
    <div class="top-nav-bar">
      <TopNavBar />
    </div>
    <div class="pro-detail-top">
      <div class="pro-detail-img">
        <img width="100%" height="100%" v-if="pictureList.length != 0" :src="pictureList[0].filePath" alt="" />
        <img @click="goVideoPlay" class="video-play-icon" src="~@/assets/img/proDetails/play.png" alt="" />
      </div>
      <div class="pro-detail-btn">
        <div @click="goPicture" class="picture-btn"><span>图片</span></div>
        <div @click="goVideoPlay" class="video-btn"><span>视频</span></div>
      </div>
    </div>

    <div class="pro-detail-body">
      <span v-if="info.prtName" class="title">{{ info.prtName }}</span>
      <span class="price"
        >价格：
        <span v-if="info.prtPrice">{{ info.prtPrice }}</span>
        <span v-else>面议</span>
      </span>
      <div class="content">
        <div class="icon"></div>
        <span>类别：{{ info.prtType }}</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>寸数：{{ info.prtInch }}</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>发数：{{ info.prtHairNum }}</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span
          >尺寸：
          <span v-if="info.prtLong && info.prtWide && info.prtHigh">{{ info.prtLong }}cm * {{ info.prtWide }}cm * {{ info.prtHigh }}cm</span>
          <span v-else>请联系商家</span></span
        >
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>规格：{{ info.prtSpecs }}</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>含量：{{ info.prtContent }}</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>重量：{{ info.prtWeight }}</span>
      </div>
      <div class="content">
        <div class="icon"></div>
        <span>效果：{{ info.prtEffect }}</span>
      </div>
    </div>

    <!-- 猜你喜欢 -->
    <RecommendList />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import { getProOne, getFileList } from "@/api";
import RecommendList from "./components/RecommendList.vue";
export default {
  name: "ProductDetails",
  components: {
    TopNavBar,
    RecommendList
  },
  data() {
    return {
      uuid: "",
      info: {},
      pictureList: []
    };
  },

  created() {
    const { uuid } = this.$route.query;
    this.uuid = uuid;
    this.getProOne();
  },

  methods: {
    getProOne() {
      const data = {
        uuid: this.uuid
      };

      getProOne(data).then(res => {
        console.log(res);
        if (res.state == 100) {
          this.info = res.items;
          this.getFileList();
        }
      });
    },

    // 获取列表数据
    getFileList() {
      const params = {
        page: 0,
        pageSize: 0,
        typeName: "prtPicture",
        parentUuid: this.info.uuid
      };

      getFileList(params).then(res => {
        if (res.state == 100) {
          this.pictureList = res.items;
        }
      });
    },

    goVideoPlay() {
      this.$router.push({ name: "VideoPlay", query: { uuid: this.info.uuid } });
    },

    goPicture() {
      this.$router.push({ name: "ProPicture", query: { uuid: this.info.uuid } });
    }
  }
};
</script>

<style lang="less" scoped>
.product-detail {
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

  .pro-detail-top {
    background: #ffffff;
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
        text-align: center;
        color: #ffffff;
        background: linear-gradient(90deg, #4d5af1 0%, #636fff 100%);
        border-radius: 15px;
        margin-right: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
      }

      .video-btn {
        width: 55px;
        height: 30px;
        text-align: center;
        color: #ffffff;
        background: linear-gradient(90deg, #b63cfb 0%, #ff3cf8 100%);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
  }

  .pro-detail-body {
    width: 375px;
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
      margin-bottom: 9px;
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

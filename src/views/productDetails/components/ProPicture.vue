<template>
  <div ref="container_box" class="container_box">
    <!-- 头部 -->
    <div class="top-nav-bar">
      <TopNavBar />
    </div>

    <div class="title">
      <img src="@/assets/img/home/recommend.png" alt="" />
      <span>全部图片</span>
    </div>

    <div class="image-container">
      <img :src="item.filePath" alt="" v-for="item in pictureList" :key="item.uuid" />
    </div>

    <div class="footer-img">
      <img src="~@/assets/img/category/footerImg.png" alt="" />
    </div>
  </div>
</template>
<script>
import TopNavBar from "./TopNavBar.vue";
import { getFileList } from "@/api";
export default {
  name: "ProPicture",
  components: {
    TopNavBar
  },
  data() {
    return {
      pictureList: []
    };
  },

  created() {
    const { uuid } = this.$route.query;
    this.getFileList(uuid);
  },

  methods: {
    // 获取列表数据
    getFileList(uuid) {
      const params = {
        page: 0,
        pageSize: 0,
        typeName: "prtPicture",
        parentUuid: uuid
      };

      getFileList(params).then(res => {
        if (res.state == 100) {
          this.pictureList = res.items;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.container_box {
  padding-top: 60px;
  padding-bottom: 20px;
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

  .title {
    margin: 10px 0 0;
    background: #ffffff;
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > img {
      width: 20px;
      height: 20px;
      margin: 0 8px 0 28px;
    }

    & > span {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #323232;
      line-height: 10px;
    }
  }

  .image-container {
    background: #fff;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }

  .footer-img {
    width: 230px;
    height: 42px;
    margin: 38px auto 35px;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

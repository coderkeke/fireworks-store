<template>
  <div class="home-container">
    <!-- 头部 -->
    <TopNavBar />
    <!-- 轮播图 -->
    <Swipe />
    <!-- 搜索 -->
    <SearchBox />
    <!-- 图片展示 -->
    <ImageList />
    <!-- 推荐产品 -->
    <RecommendList />

    <div id="qrcode" ref="qrcode"></div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "./components/Swipe.vue";
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
  mounted() {
    this.payOrder();
  },
  methods: {
    // 展示二维码
    payOrder() {
      this.innerVisible = true;
      // 二维码内容,一般是由后台返回的跳转链接,这里是写死的一个链接
      this.qrcode = "http://192.168.1.104:8080/#/videoPlay";
      // 使用$nextTick确保数据渲染
      this.$nextTick(() => {
        this.crateQrcode();
      });
    },

    // 生成二维码
    crateQrcode() {
      this.qr = new QRCode("qrcode", {
        width: 150,
        height: 150, // 高度
        text: this.qrcode // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
      // console.log(this.qrcode)
    }
  }
};
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 100px;
}
</style>

<template>
  <div class="swipe-container">
    <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="swipe-item-box"><img src="@/assets/img/home/4.jpg" alt="" /></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item-box"><img src="@/assets/img/home/7.jpg" alt="" /></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item-box"><img src="@/assets/img/home/11.png" alt="" /></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item-box"><img src="@/assets/img/home/22.png" alt="" /></div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="swipe-item-box"><img src="@/assets/img/home/33.png" alt="" /></div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Swipe",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.swipe-container {
  .my-swipe .van-swipe-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #39a9ed;

    .swipe-item-box {
      width: 100%;
      height: 225px;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

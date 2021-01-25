<template>
  <div class="profile-container">
    <TopNavBar />
    <div class="body">
      <div class="head-img-box">
        <img :src="$store.state.userInfo && $store.state.userInfo.headimgurl" alt="" />
        <span v-if="$store.state.userInfo">{{ $store.state.userInfo.nickname }}</span>
        <span v-else>微信头像</span>
      </div>
      <div @click="goProList(1)" class="item">
        <div class="item-left">
          <img class="item-icon" src="@/assets/img/profile/xihuan.png" alt="" />
          <span>我的喜欢</span>
        </div>

        <van-icon class="item-right" name="arrow" />
      </div>

      <div @click="goProList(2)" class="item">
        <div class="item-left">
          <img class="item-icon" src="@/assets/img/profile/shoucang.png" alt="" />
          <span>我的收藏</span>
        </div>

        <van-icon class="item-right" name="arrow" />
      </div>

      <div @click="goProList(3)" class="item">
        <div class="item-left">
          <img class="item-icon" src="@/assets/img/profile/zuji.png" alt="" />
          <span>我的足迹</span>
        </div>

        <van-icon class="item-right" name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
export default {
  name: "Profile",
  components: {
    TopNavBar
  },
  methods: {
    goProList(type) {
      this.$router.push({ name: "ProList", query: { type } });
    }
  }
};
</script>

<style lang="less" scoped>
.profile-container {
  .body {
    .head-img-box {
      width: 375px;
      height: 233px;
      background: linear-gradient(90deg, #580ffd 0%, #a610fd 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > img {
        width: 72px;
        height: 72px;
        background: #ffffff;
        border-radius: 50%;
        margin-bottom: 14px;
      }

      & > span {
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
      }
    }

    .item {
      width: 375px;
      height: 59px;
      background: #ffffff;
      margin: 7px 0;
      padding: 0 26px 0 23px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-left {
        display: flex;
        justify-content: center;
        align-items: center;

        & > img {
          width: 30px;
          height: 30px;
          margin-right: 12px;
        }

        & > span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #323232;
        }
      }

      .item-right {
        width: 8px;
        height: 12px;
        color: #a3a3a3;
      }
    }
  }
}
</style>

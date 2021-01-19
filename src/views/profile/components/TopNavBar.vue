<template>
  <van-nav-bar left-arrow>
    <template #left>
      <img @click="goBack(1)" width="28px" height="28px" src="~@/assets/img/videoPlay/back.png" alt="" />
    </template>
    <template #title>
      <div class="content">
        个人中心
      </div>
    </template>
    <template #right>
      <img @click="goBack(2)" width="28px" height="28px" src="~@/assets/img/videoPlay/home.png" alt="" />
    </template>
  </van-nav-bar>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "TopNavBar",
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    goBack(type) {
      switch (type) {
        case 1:
          this.$router.go(-1);
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
.home-logo {
  width: 112px;
  height: 29px;
}

.home-left,
.home-right {
  width: 29px;
  height: 29px;
}

.content {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #323232;
}
</style>

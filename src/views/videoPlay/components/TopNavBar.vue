<template>
  <van-nav-bar title="标题" left-arrow>
    <template #left>
      <img width="28px" height="28px" src="~@/assets/img/videoPlay/back.png" alt="" />
    </template>
    <template #title>
      <img class="home-logo" src="@/assets/img/home/homeLogo.png" alt="" />
    </template>
    <template #right>
      <img @click="goBack" width="28px" height="28px" src="~@/assets/img/videoPlay/home.png" alt="" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "TopNavBar",
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
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
</style>

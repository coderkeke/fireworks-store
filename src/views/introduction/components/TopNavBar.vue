<template>
  <van-nav-bar title="标题" left-arrow>
    <template #left>
      <img class="home-left" src="@/assets/img/home/homLeft.png" alt="" />
    </template>
    <template #title>
      <img class="home-logo" src="@/assets/img/home/homeLogo.png" alt="" />
    </template>
    <template #right>
      <img class="home-right" src="@/assets/img/home/homeUser.png" alt="" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "TopNavBar"
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

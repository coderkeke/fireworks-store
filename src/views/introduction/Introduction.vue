<template>
  <div>
    <!-- 头部 -->
    <TopNavBar />
    <!-- 轮播图 -->
    <Swipe />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "./components/Swipe.vue";
export default {
  name: "Introduction",
  components: {
    TopNavBar,
    Swipe
  }
};
</script>

<style></style>

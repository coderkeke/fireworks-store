<template>
  <div class="view-play-container">
    <video width="100%" controls src="https://v-cdn.zjol.com.cn/280443.mp4"></video>
  </div>
</template>

<script>
export default {
  name: "VideoPlay"
};
</script>

<style lang="less" scoped>
.view-play-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

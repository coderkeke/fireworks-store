<template>
  <div class="image-container">
    <img src="@/assets/img/home/5.png" alt="" />
    <img src="@/assets/img/home/7.jpg" alt="" />
    <img src="@/assets/img/home/6.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "ImageList"
};
</script>

<style lang="less" scoped>
.image-container {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
  }
}
</style>

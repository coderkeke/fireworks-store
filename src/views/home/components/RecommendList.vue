<template>
  <div class="recommend-container">
    <div class="title">
      <img src="@/assets/img/home/recommend.png" alt="" />
      <span>推荐产品</span>
    </div>
    <div class="product-list">
      <ProductList />
    </div>
  </div>
</template>

<script>
import ProductList from "@c/common/ProductList.vue";
export default {
  name: "RecommendList",
  components: {
    ProductList
  }
};
</script>

<style lang="less" scoped>
.recommend-container {
  margin-top: 8px;

  .title {
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
}
</style>

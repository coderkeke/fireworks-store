<template>
  <div class="recommend-container">
    <div class="title">
      <img src="@/assets/img/home/recommend.png" alt="" />
      <span>猜你喜欢</span>
    </div>
    <div class="product-list" v-for="item in proList" :key="item.uuid">
      <ProductList :info="item" />
    </div>
  </div>
</template>

<script>
import { getProList } from "@/api";
import ProductList from "@c/common/ProductList.vue";
export default {
  name: "RecommendList",
  components: {
    ProductList
  },
  data() {
    return {
      proList: []
    };
  },

  created() {
    this.getProList();
  },

  methods: {
    getProList() {
      const params = {
        isOn: 0,
        page: 1,
        pageSize: 10,
        shopUuid: this.$store.state.shopUuid
      };
      getProList(params).then(res => {
        if (res.state == 100) {
          this.proList = res.items;
        }
      });
    }
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

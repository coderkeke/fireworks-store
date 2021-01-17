<template>
  <div class="recommend-container">
    <div class="loading" v-if="isLoading"><van-loading color="#0094ff" /></div>

    <div v-else>
      <div class="product-list" v-for="item in proList" :key="item.uuid">
        <ProductList :info="item" />
      </div>
      <div class="product-item" v-if="proList.length == 0"><span>暂无数据</span></div>
    </div>
  </div>
</template>

<script>
import { getProList } from "@/api";
import ProductList from "@c/common/ProductList.vue";
export default {
  name: "RecommendList",
  props: {
    page: { default: 1 }
  },
  components: {
    ProductList
  },
  data() {
    return {
      proList: [],
      prtCode: "",
      prtName: "",
      isLoading: false
    };
  },

  created() {
    this.bus.$on("prtCode", data => {
      this.prtCode = data;
      this.getProList();
    });

    this.bus.$on("prtName", data => {
      this.prtName = data;
      console.log(this.prtName);
      this.getProList();
    });
  },

  methods: {
    getProList() {
      const params = {
        isOn: 0,
        page: 0,
        pageSize: 0,
        shopUuid: this.$store.state.shopUuid,
        prtCode: this.prtCode || "",
        prtName: this.prtName || ""
      };
      console.log(params);
      this.isLoading = true;
      getProList(params).then(res => {
        if (res.state == 100) {
          this.proList = res.items;
        }

        this.isLoading = false;
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

  .product-item {
    width: 361px;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & > span {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 700;
      color: #969696;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

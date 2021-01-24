<template>
  <div class="recommend-container">
    <div class="product-list" v-for="item in proList" :key="item.uuid">
      <ProductList @handleDelete="handleDelete" :disabled="disabled" @refreshScroll="refreshScroll" :info="item" />
    </div>
  </div>
</template>

<script>
import ProductList from "@c/common/ProductList.vue";
export default {
  name: "RecommendList",

  props: {
    disabled: {
      default: true
    },
    proList: {
      default: []
    }
  },
  components: {
    ProductList
  },

  methods: {
    refreshScroll() {
      this.$emit("refreshScroll");
    },
    handleDelete(info) {
      this.$emit("handleDelete", info);
    }
  }
};
</script>

<style lang="less" scoped></style>

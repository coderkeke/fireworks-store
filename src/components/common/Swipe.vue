<template>
  <div class="swipe-container">
    <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item.uuid">
        <div class="swipe-item-box"><img :src="item.filePath" alt="" /></div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getFileList } from "@/api";
export default {
  props: {
    typeName: {}
  },
  name: "Swipe",
  data() {
    return {
      swipeList: []
    };
  },

  created() {
    this.getFileList();
  },
  methods: {
    // 获取列表数据
    getFileList() {
      const params = {
        page: 0,
        pageSize: 0,
        typeName: this.typeName,
        parentUuid: this.$store.state.shopUuid
      };
      getFileList(params).then(res => {
        console.log(res.items);
        if (res.state == 100) {
          this.swipeList = res.items;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.swipe-container {
  .my-swipe .van-swipe-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #39a9ed;

    .swipe-item-box {
      width: 100%;
      height: 225px;

      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

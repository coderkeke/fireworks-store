<template>
  <div class="image-container">
    <img :src="item.filePath" alt="" v-for="item in imgList" :key="item.uuid" />
  </div>
</template>

<script>
import { getFileList } from "@/api";
export default {
  name: "ImageList",
  data() {
    return {
      imgList: []
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
        typeName: "deCompanyProfile",
        parentUuid: this.$store.state.shopUuid
      };
      getFileList(params).then(res => {
        console.log(res.items);
        if (res.state == 100) {
          this.imgList = res.items;
        }
      });
    }
  }
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

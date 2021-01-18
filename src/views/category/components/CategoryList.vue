<template>
  <div class="category-list-box">
    <div @click="goProAllList(index)" class="category-list" v-for="(item, index) of categoryList" :key="item.uuid">
      <img class="icon-category" :src="item.filePath" alt="" />
      <div class="category-rt-box">
        <div class="category-content">
          <span class="category-typeName">{{ item.typeName }}</span>
          <span class="category-enName">{{ item.enName }}</span>
        </div>
        <img class="file-ico" :src="item.fileIoc" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProTypeList } from "@/api";
export default {
  name: "CategoryList",
  data() {
    return {
      categoryList: []
    };
  },

  created() {
    this.getProTypeList();
  },
  methods: {
    getProTypeList() {
      const params = {
        shopUuid: this.$store.state.shopUuid
      };
      getProTypeList(params).then(res => {
        if (res.state == 100) {
          this.categoryList = res.items;
        }
      });
    },
    goProAllList(index) {
      this.$store.commit("SET_PRO_ACTIVE", index);
      this.$router.push({ name: "ProAllList" });
    }
  }
};
</script>

<style lang="less" scoped>
.category-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  .icon-category {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .category-rt-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 256px;
    height: 58px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 22px;
    &::before {
      content: "";
      width: 70px;
      height: 70px;
      background-color: #f6f6f6;
      // border-radius: 0 61px 61px 0;
      border-radius: 50%;
      position: absolute;
      left: -56px;
    }

    .category-content {
      display: flex;
      flex-direction: column;
      .category-typeName {
        font-size: 13px;
        line-height: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #646464;
        text-align: left;
      }

      .category-enName {
        margin-top: 6px;
        font-size: 12px;
        line-height: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #c8c8c8;
        text-align: left;
      }
    }

    .file-ico {
      position: absolute;
      right: 13px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: none;
      outline: none;
    }
  }
}
</style>

<template>
  <div class="pro-type-list">
    <van-tabs @change="change" v-model="active" :swipeable="true" sticky>
      <van-tab title-class="type-name" v-for="(item, index) in categoryList" :key="item.uuid">
        <template #title>
          <div class="item">
            <img :src="item.filePath" alt="" />
            <div class="type-name" :class="{ active: active == index }">{{ item.typeName }}</div>
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getProTypeList } from "@/api";
import allPro from "@/assets/img/allPro.png";
export default {
  name: "ProTypeList",
  data() {
    return {
      categoryList: [],
      active: 0
    };
  },

  created() {
    this.active = this.$store.state.proActive;
    this.getProTypeList();
  },

  methods: {
    getProTypeList() {
      const params = {
        shopUuid: this.$store.state.shopUuid
      };
      getProTypeList(params).then(res => {
        if (res.state == 100) {
          this.categoryList = [...res.items];
          this.$nextTick(() => {
            this.active = this.$store.state.proActive;
          });
          this.bus.$emit("prtCode", this.categoryList[this.active].typeName);
        }
      });
    },
    change(e) {
      this.$store.commit("SET_PRO_ACTIVE", e);
      this.bus.$emit("prtCode", this.categoryList[e].typeName);
    }
  }
};
</script>

<style lang="less" scoped>
.pro-type-list {
  height: 100%;
  background-color: #fff;
  margin: 7px 0;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img {
      width: 46px;
      height: 46px;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
      border-radius: 50%;
      margin-bottom: 12px;
    }

    .type-name {
      white-space: nowrap;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #969696;
      line-height: 21px;
    }

    .active {
      color: #ff1448;
    }
  }

  /deep/.van-tabs__wrap {
    height: 100px;

    .van-tabs__line {
      display: none;
    }
  }

  /deep/.van-tabs__content {
    display: none;
  }
}
</style>

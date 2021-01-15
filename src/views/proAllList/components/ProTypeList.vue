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
export default {
  name: "ProTypeList",
  data() {
    return {
      categoryList: [],
      active: 0
    };
  },

  created() {
    const { active } = this.$route.query;
    if (active) {
      this.active = active;
    }
    this.getProTypeList();
  },
  methods: {
    getProTypeList() {
      const params = {
        shopUuid: this.$store.state.shopUuid
      };
      getProTypeList(params).then(res => {
        if (res.state == 100) {
          const obj = {
            filePath: "https://vue-study.oss-cn-shanghai.aliyuncs.com/shop/33b95da4324e4c10a87ce1de186e6307/bc1fc1270ac14a3d8f528867cbaa6deb/2021-01-04/f871d6313c534af39411408d1c7998f1.jpg",
            typeName: "全部产品",
            uuid: "bc1fc127v0acc1z4a3d8f5288637cbaa46deb"
          };

          this.categoryList = [obj, ...res.items];

          if (res.items.length != 0) {
            this.bus.$emit("prtCode", res.items[0].typeName);
          }
        }
      });
    },
    change(e) {
      if (e == 0) {
        this.bus.$emit("prtCode", "");
      } else {
        this.bus.$emit("prtCode", this.categoryList[e].typeName);
      }
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

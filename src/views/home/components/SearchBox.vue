<template>
  <div class="search-box">
    <div @click="goProAllList" class="search-top">
      <img class="left" src="@/assets/img/home/searchIcon.png" />
      <span>请输入想要搜索的产品</span>
    </div>
    <div class="search-type">
      <div @click="goProAllList" class="type-item">
        <img src="@/assets/img/home/xinpin.png" />
        <span>新品上市</span>
      </div>
      <div @click="goProList(0)" class="type-item">
        <img src="@/assets/img/home/zhendian.png" />
        <span>镇店之宝</span>
      </div>
      <div @click="goSharingSpace(0)" class="type-item">
        <img src="@/assets/img/home/ranfang.png" />
        <span>燃放日常</span>
      </div>
      <div @click="goSharingSpace(1)" class="type-item">
        <img src="@/assets/img/home/yanhuo.png" />
        <span>焰火视频</span>
      </div>
      <div @click="goSharingSpace(2)" class="type-item">
        <img src="@/assets/img/home/tuwen.png" />
        <span>精彩图文</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  methods: {
    goProAllList() {
      this.$store.commit("SET_PRO_ACTIVE", 0);
      this.$router.push({ name: "ProAllList" });
    },

    goSharingSpace(type) {
      this.$router.push({ name: "SharingSpace", query: { type } });
    },
    goProList(type) {
      this.$router.push({ name: "ProList", query: { type } });
    }
  }
};
</script>

<style lang="less" scoped>
.search-box {
  width: 375px;
  height: 189px;
  background: #ffffff;
  margin: 9px 0 11px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .search-top {
    width: 281px;
    height: 33px;
    background: #f4f4f4;
    border-radius: 16px;
    display: flex;
    align-items: center;
    position: relative;

    .left {
      margin: 0 8px 0 13px;
    }

    .right {
      position: absolute;
      right: 12px;
    }

    & > span {
      white-space: nowrap;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #646464;
    }

    & > img {
      width: 17px;
      height: 17px;
    }
  }

  .search-type {
    width: 332px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 21px;

    .type-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        margin-top: 8px;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #646464;
      }
    }
  }
}
</style>

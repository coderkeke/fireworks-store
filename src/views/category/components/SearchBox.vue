<template>
  <div class="search-box">
    <div @click="goProAllList" class="search-top">
      <img class="left" src="@/assets/img/home/searchIcon.png" />
      <span>请输入想要搜索的产品</span>
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
    }
  }
};
</script>

<style lang="less" scoped>
.search-box {
  width: 375px;
  height: 87px;
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
}
</style>

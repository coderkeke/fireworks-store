<template>
  <div class="search-box">
    <div class="search-top">
      <img class="left" src="@/assets/img/home/searchIcon.png" />
      <span>请输入想要搜索的产品</span>
      <img class="right" src="@/assets/img/home/voice.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style lang="less" scoped>
.search-box {
  width: 375px;
  height: 87px;
  background: #ffffff;
  border-radius: 15px;
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

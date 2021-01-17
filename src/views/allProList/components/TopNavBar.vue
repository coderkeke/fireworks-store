<template>
  <van-nav-bar left-arrow>
    <template #left>
      <img @click="goBack(1)" width="28px" height="28px" src="~@/assets/img/videoPlay/back.png" alt="" />
    </template>
    <template #title>
      <div class="search-top">
        <img @click="searchClick" class="left" src="@/assets/img/home/searchIcon.png" />
        <input class="search-input" @keyup.enter="searchClick" v-model="searchName" />
        <img @click="handleVoice" class="right" src="@/assets/img/home/voice.png" />
      </div>
    </template>
    <template #right>
      <img @click="goBack(2)" width="28px" height="28px" src="~@/assets/img/videoPlay/home.png" alt="" />
    </template>
  </van-nav-bar>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "TopNavBar",
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    goBack(type) {
      switch (type) {
        case 1:
          this.$router.go(-1);
          break;
        case 2:
          this.$router.push({ name: "Home" });
          break;
      }
    },

    searchClick() {
      this.$emit("prtName", this.searchName);
    },
    handleVoice() {
      Toast("网页暂不支持");
    }
  }
};
</script>

<style lang="less" scoped>
.search-top {
  width: 228px;
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

  & > .search-input {
    width: 150px;
    white-space: nowrap;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #646464;
    border: none;
    outline: none;
    background: transparent;
  }

  & > img {
    width: 17px;
    height: 17px;
  }
}

.home-logo {
  width: 112px;
  height: 29px;
}

.home-left,
.home-right {
  width: 29px;
  height: 29px;
}

[class*="van-hairline"]::after {
  border: none;
}
</style>

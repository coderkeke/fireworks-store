<template>
  <div class="swipe-container">
    <van-swipe @change="onChange" class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeList" :key="item.uuid">
        <div class="swipe-item-box"><img :src="item.filePath" alt="" /></div>
      </van-swipe-item>

      <template #indicator>
        <div v-if="swipeList.length > 1" class="custom-indicator">
          <div class="indicator" :class="{ active: active == index }" v-for="(item, index) in swipeList" :key="item.uuid"></div>
        </div>
      </template>
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
      swipeList: [],
      active: 0
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
    },

    onChange(index) {
      console.log(index);
      this.active = index;
    }
  }
};
</script>

<style lang="less" scoped>
.swipe-container {
  width: 100%;
  height: 225px;
  .my-swipe {
    .van-swipe-item {
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

    .custom-indicator {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 11px;
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;

      .indicator {
        overflow: hidden;
        margin: 0 10px;
        width: 5px;
        height: 5px;
        background: #808080;
        opacity: 0.5;
        border-radius: 50%;
      }

      .indicator.active {
        width: 50px;
        height: 5px;
        background: #808080;
        opacity: 0.5;
        border-radius: 3px;
      }
    }
  }
}
</style>

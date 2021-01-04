<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item v-for="tab of tabList" :key="tab.to" :to="tab.to">
      <template #icon="props">
        <div class="tab-item" :class="props.active ? 'isActive' : ''">
          <div class="img-box">
            <div class="img-bg">
              <img :src="props.active ? tab.icon.active : tab.icon.inactive" />
            </div>
          </div>
        </div>
      </template>
      <span class="tab-title" :style="{ color: tab.activeColor }">{{ tab.title }}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      active: 0,
      tabList: [
        {
          to: "/home",
          title: "主页",
          activeColor: "#FF4A07",
          icon: {
            active: require("@/assets/img/navigation/home_active.png"),
            inactive: require("@/assets/img/navigation/home.png")
          }
        },
        {
          to: "/category",
          title: "产品分类",
          icon: {
            active: require("@/assets/img/navigation/category_active.png"),
            inactive: require("@/assets/img/navigation/category.png")
          }
        },
        {
          to: "/introduction",
          title: "企业介绍",
          icon: {
            active: require("@/assets/img/navigation/introduction_active.png"),
            inactive: require("@/assets/img/navigation/introduction.png")
          }
        },
        {
          to: "/contact",
          title: "联系我们",
          icon: {
            active: require("@/assets/img/navigation/contact_active.png"),
            inactive: require("@/assets/img/navigation/contact.png")
          }
        }
      ]
    };
  },
  methods: {
    onChange(index) {}
  }
};
</script>

<style lang="less" scoped>
.van-tabbar {
  height: 60px;
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.1);
  /deep/ .van-tabbar-item {
    .van-tabbar-item__icon {
      height: 22px;
      width: 100%;

      .tab-item {
        height: 22px;
        .img-box {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 22px;
            height: 22px;
          }
        }
      }

      .tab-item.isActive {
        margin-top: -32px;

        .img-box {
          .img-bg {
            background-color: #fff;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &::after {
              content: "";
              width: 60px;
              height: 60px;
              display: block;
              position: absolute;
              top: -30px;
              left: -30px;
            }

            &::before {
              content: "";
              width: 60px;
              height: 60px;
              display: block;
              position: absolute;
            }

            img {
              width: 46px;
              height: 46px;
            }
          }
        }

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .tab-title {
      margin-top: 6px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #646464;
    }
  }
}
</style>

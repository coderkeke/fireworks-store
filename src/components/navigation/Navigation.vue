<template>
  <van-tabbar v-model="active" route @change="onChange">
    <van-tabbar-item v-for="(tab, index) of tabList" :key="tab.to" :to="tab.to">
      <span class="tab-title">{{ tab.title }}</span>
      <template #icon="props">
        <div class="tab-item" :class="props.active ? 'isActive' : ''">
          <div class="img-box">
            <div class="img-bg">
              <!-- 原版写法存在问题, 这种写法, 每点击一次都会请求一次图片 -->
              <img :src="props.active ? tab.icon.active : tab.icon.inactive" />
            </div>
          </div>
          <svg class="svg-box" v-if="props.active" fill="#fff" version="1.1" id="wave" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 119 26">
            <defs>
              <filter id="shadow">
                <feDropShadow dx="0" dy="-3" flood-color="#000" flood-opacity="0.04" />
              </filter>
            </defs>
            <path filter="url(#shadow)" class="path" d="M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z"></path>
          </svg>
        </div>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import home_active from "@/assets/img/navigation/home_active.png";
import home from "@/assets/img/navigation/home.png";
import category_active from "@/assets/img/navigation/category_active.png";
import category from "@/assets/img/navigation/category.png";
import introduction_active from "@/assets/img/navigation/introduction_active.png";
import introduction from "@/assets/img/navigation/introduction.png";
import contact_active from "@/assets/img/navigation/contact_active.png";
import contact from "@/assets/img/navigation/contact.png";
export default {
  name: "Navigation",
  data() {
    return {
      active: 0,
      tabList: [
        {
          to: "/home",
          title: "主页",
          // activeColor: "#FF4A07",
          icon: {
            active: home_active,
            inactive: home
          }
        },
        {
          to: "/category",
          title: "产品分类",
          icon: {
            active: category_active,
            inactive: category
          }
        },
        {
          to: "/introduction",
          title: "企业介绍",
          icon: {
            active: introduction_active,
            inactive: introduction
          }
        },
        {
          to: "/contact",
          title: "联系我们",
          icon: {
            active: contact_active,
            inactive: contact
          }
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.active = index;
      console.log(index);
    }
  },
  beforeMount() {
    // 根据不同策略提前锁定当前选中
    for (let i = 0; i < this.tabList.length; i++) {
      if (this.$route.path === this.tabList[i].to) {
        this.active = i;
        break;
      }
    }
  },
  mounted() {
    console.log(this.active);
  }
};
</script>

<style lang="less" scoped>
.van-tabbar-item--active {
  color: #ff4a07 !important;
}

[class*="van-hairline"]::after {
  border: none;
}
.van-tabbar {
  height: 60px;
  box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;

  /deep/ .van-tabbar-item {
    .van-tabbar-item__icon {
      height: 22px;
      width: 100%;

      .tab-item {
        position: relative;
        svg {
          position: absolute;
          top: 3px;
          left: 0;
          z-index: -10;
        }
        .img-box {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 22px;
            height: 22px;
            position: relative;
            z-index: 2;
          }
        }
      }

      .tab-item.isActive {
        margin-top: -32px;

        .img-box {
          .img-bg {
            background-color: transparent;
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
      /*color: #646464;
      &.active {
        color: #FF4A07;
      }*/
    }
  }
}
</style>

<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item v-for="tab of tabList" :key="tab.to" :to="tab.to">
      <span>{{ tab.title }}</span>
      <template #icon="props">
        <img :src="props.active ? tab.icon.active : tab.icon.inactive" />
      </template>
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
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
        {
          to: "/category",
          title: "产品分类",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
        {
          to: "/introduction",
          title: "企业介绍",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
          }
        },
        {
          to: "/contact",
          title: "联系我们",
          icon: {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
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

<style lang="scss" scoped></style>

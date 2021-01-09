<template>
  <div class="category-list-box">
    <div class="category-list" v-for="item of categoryList" :key="item.enName">
      <img class="icon-category" src="@/assets/img/home/4.jpg" alt="" />
      <div class="category-rt-box">
        <div class="category-content">
          <span class="category-typeName">全部产品</span>
          <span class="category-enName">quanbu</span>
        </div>
        <img class="file-ico" src="@/assets/img/home/4.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      categoryList: [
        {
          typeName: "全部产品",
          enName: "quanb2u"
        },
        {
          typeName: "全部产品",
          enName: "quan23bu"
        },
        {
          typeName: "全部产品",
          enName: "quanb4u"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.category-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  .icon-category {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .category-rt-box {
    position: relative;
    display: flex;
    align-items: center;
    width: 256px;
    height: 58px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: 22px;
    &::before {
      content: "";
      width: 70px;
      height: 70px;
      background-color: #f6f6f6;
      // border-radius: 0 61px 61px 0;
      border-radius: 50%;
      position: absolute;
      left: -56px;
    }

    .category-content {
      display: flex;
      flex-direction: column;
      .category-typeName {
        font-size: 13px;
        line-height: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #646464;
        text-align: left;
      }

      .category-enName {
        margin-top: 6px;
        font-size: 12px;
        line-height: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #c8c8c8;
        text-align: left;
      }
    }

    .file-ico {
      position: absolute;
      right: 13px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>

<template>
  <div class="allProList">
    <TopNavBar @prtName="handlePrtName" />
    <div class="content">
      <div class="right">
        <van-sidebar @change="onChangeSidebar" v-model="active">
          <van-sidebar-item v-for="item in categoryList" :key="item.uuid" :title="item.typeName" />
        </van-sidebar>
      </div>

      <div class="list">
        <div @click="goProDetail(item.uuid)" class="item" v-for="(item, index) of proList" :key="item.uuid">
          <img :src="imgList[index]" alt="" />
          <span>{{ item.prtName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import { getProTypeList, getProList, getFileList } from "@/api";
export default {
  name: "AllProList",
  components: {
    TopNavBar
  },

  data() {
    return {
      active: "",
      categoryList: [],
      proList: [],
      prtCode: "",
      prtName: "",
      imgList: []
    };
  },
  created() {
    this.getProTypeList();
  },
  methods: {
    goProDetail(uuid) {
      this.$router.push({ name: "ProductDetails", query: { uuid: uuid } });
    },

    getProTypeList() {
      const params = {
        shopUuid: this.$store.state.shopUuid
      };
      getProTypeList(params).then(res => {
        if (res.state == 100) {
          const obj = {
            typeName: "全部产品",
            uuid: "bc1fc127v0acc1z4a3d8f5288637cbaa46deb"
          };
          this.categoryList = [obj, ...res.items];
          this.getProList();
        }
      });
    },

    getProList() {
      const params = {
        isOn: 0,
        page: 0,
        pageSize: 0,
        shopUuid: this.$store.state.shopUuid,
        prtCode: this.prtCode || "",
        prtName: this.prtName || ""
      };
      this.isLoading = true;
      getProList(params).then(res => {
        console.log(res);
        if (res.state == 100) {
          this.proList = res.items;
          this.proList.forEach((item, index) => {
            this.getFileList(item.uuid, index);
          });
        }
        this.isLoading = false;
      });
    },

    onChangeSidebar(e) {
      if (e == 0) {
        this.prtCode = "";
      } else {
        this.prtCode = this.categoryList[e].typeName;
      }

      this.getProList();
    },

    handlePrtName(e) {
      console.log(e);
      this.prtName = e;
      this.getProList();
    },

    getFileList(uuid, index) {
      const params = {
        page: 0,
        pageSize: 0,
        typeName: "prtPicture",
        parentUuid: uuid
      };
      getFileList(params).then(res => {
        console.log(res.items);
        if (res.state == 100) {
          this.$set(this.imgList, index, res.items[0].filePath);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.allProList {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .content {
    display: flex;

    .list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 15px 0 15px 14px;
      .item {
        width: 69px;
        height: 87px;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        margin-bottom: 15px;

        & > img {
          width: 69px;
          height: 69px;
          margin-bottom: 5px;
        }

        & > span {
          display: inline-block;
          width: 69px;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #646464;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .right {
    width: 109px;
    height: 100%;
  }

  .van-sidebar {
    width: 109px;
    min-height: 100vh;
    background-color: #e5e5e5;
  }

  .van-sidebar-item--select::before {
    background-color: #4f5aff;
    width: 3px;
    height: 100%;
  }

  .van-sidebar-item {
    background-color: #e5e5e5;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #646464;
  }
  .van-sidebar-item--select,
  .van-sidebar-item--select:active {
    background-color: #f5f5f5;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #646464;
  }
}
</style>

<template>
  <div class="product-container">
    <div class="product-list">
      <van-swipe-cell :disabled="disabled" right-width="64">
        <div class="product-item">
          <div class="item-img">
            <van-image radius="5" fit="cover" width="130" height="130" :src="imgUrl" />
          </div>
          <div class="item-content">
            <div v-if="info.isColl == 1" class="shou-cang">
              <img src="../../assets/img/shoucang.png" alt="" />
            </div>
            <span class="prt-title">{{ info.prtName }}</span>
            <span class="prt-inch"
              >尺寸：
              <span v-if="info.prtLong && info.prtWide && info.prtHigh">{{ info.prtLong }}cm * {{ info.prtWide }}cm * {{ info.prtHigh }}cm</span>
              <span v-else>请联系商家</span>
            </span>

            <span class="prt-content">含量：{{ info.prtContent }}</span>
            <span class="prt-price"
              >价格：
              <span v-if="info.prtPrice">{{ info.prtPrice }}</span>
              <span v-else>面议</span>
            </span>
            <div class="item-btn">
              <div @click="goProDetail" class="btn-left">
                <span>详情</span>
              </div>
              <div @click="handleVideoPlay" class="btn-right">
                <span>视频</span>
              </div>
            </div>
          </div>
        </div>
        <template #right>
          <van-button @click="handleDelete" square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
import { getFileList } from "@/api";
export default {
  name: "productList",
  props: {
    disabled: {
      type: Boolean,
      default: true
    },
    info: {
      type: Object
    }
  },
  data() {
    return {
      imgUrl: ""
    };
  },
  created() {
    this.getFileList();
  },
  methods: {
    handleVideoPlay() {
      this.$router.push({ name: "VideoPlay", query: { uuid: this.info.uuid } });
    },
    goProDetail() {
      this.$router.push({ name: "ProductDetails", query: { uuid: this.info.uuid } });
    },

    getFileList() {
      const params = {
        page: 0,
        pageSize: 0,
        typeName: "prtPicture",
        parentUuid: this.info.uuid
      };
      getFileList(params).then(res => {
        console.log(res.items);
        if (res.state == 100) {
          this.imgUrl = res.items[0].filePath;
          this.$emit("refreshScroll");
        }
      });
    },
    handleDelete() {
      this.$emit("handleDelete", this.info);
    }
  }
};
</script>

<style lang="less" scoped>
.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .van-swipe-cell {
    width: 100%;
    margin-bottom: 7px;

    /deep/ .van-swipe-cell__wrapper {
      display: flex;
      justify-content: center;
      .product-item {
        width: 361px;
        height: 150px;
        background: #ffffff;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        padding: 10px;
        display: flex;

        .item-content {
          width: 191px;
          display: flex;
          flex-direction: column;
          margin-left: 20px;
          font-family: PingFang SC;
          font-weight: 500;
          position: relative;

          .shou-cang {
            position: absolute;
            top: 0;
            right: 0;
            & > img {
              width: 14px;
              height: 15px;
            }
          }

          & > span {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .prt-title {
            width: 170px;
            font-size: 13px;
            color: #000000;
            margin: 0 0 8px;
          }

          .prt-inch,
          .prt-content {
            font-size: 11px;
            color: #989898;
            font-family: PingFang SC;
            font-weight: 500;
            color: #989898;
          }
          .prt-content {
            margin: 5px 0 10px;
          }

          .prt-price {
            font-size: 11px;
            color: #ff1448;
            margin-bottom: 18px;
          }

          .item-btn {
            width: 181px;
            height: 33px;
            background: linear-gradient(90deg, #4d5af1 0%, #ff3cf8 100%);
            box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            position: relative;

            .btn-left,
            .btn-right {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #ffffff;
              line-height: 13px;
            }

            .btn-left {
              background: linear-gradient(90deg, #8be73f 0%, #4d5af1 0%, #636fff 100%);
            }

            .btn-right {
              background: linear-gradient(90deg, #b63cfb 0%, #ff3cf8 100%);
            }

            .no-video {
              background: linear-gradient(90deg, #838383 0%, #c3c3c3 100%);
            }
          }
        }
      }

      .delete-button {
        width: 65px;
        height: 100%;
        background: #ff1448;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.03);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <!-- 头部 -->
    <div class="top-nav-bar">
      <TopNavBar>{{ title }}</TopNavBar>
    </div>

    <!-- 列表 -->

    <div class="scroll-box">
      <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
        <div class="list">
          <!-- 日常 -->
          <template v-if="currentType == 0 && dataList.length != 0">
            <div class="day-item" v-for="(item, index) in dataList" :key="item.uuid">
              <div class="left">
                <img src="../../../assets/img/profile/shoucang.png" alt="" />
              </div>
              <div class="right">
                <div class="item-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="context">{{ item.context }}</div>
                </div>
                <div class="video">
                  <video
                    id="video"
                    class="video_box"
                    :src="fileList[index]"
                    poster
                    width="100%"
                    height="100%"
                    controls
                    autoplay="autoplay"
                    webkit-playsinline="true"
                    playsinline="true"
                    preload="true"
                    x5-video-player-type="h5-page"
                    x5-video-player-fullscreen="false"
                  ></video>
                </div>

                <div class="item-footer">
                  <span class="optionDate">{{ item.optionDate }}</span>
                  <span class="clickCount">观看次数：{{ item.clickCount }}次</span>
                </div>
              </div>
            </div>
          </template>

          <!-- 烟火 -->
          <template v-if="currentType == 1 && dataList.length != 0">
            <div class="video-item" v-for="(item, index) in dataList" :key="item.uuid">
              <div class="video-top">
                <img src="../../../assets/img/profile/shoucang.png" alt="" />
                <div class="video-content">
                  <div class="title">{{ item.title }}</div>
                  <div class="context">{{ item.context }}</div>
                </div>
              </div>
              <div class="video">
                <video
                  id="video"
                  class="video_box"
                  :src="fileList[index]"
                  poster
                  width="100%"
                  height="100%"
                  controls
                  autoplay="autoplay"
                  webkit-playsinline="true"
                  playsinline="true"
                  preload="true"
                  x5-video-player-type="h5-page"
                  x5-video-player-fullscreen="false"
                ></video>
              </div>
              <div class="item-footer">
                <span class="optionDate">{{ item.optionDate }}</span>
                <span class="clickCount">观看次数：{{ item.clickCount }}次</span>
              </div>
            </div>
          </template>

          <!-- 图片 -->
          <template v-if="currentType == 2 && dataList.length != 0">
            <div class="img-item" v-for="(item, index) in dataList" :key="item.uuid">
              <div class="top">
                <div class="left">
                  <img src="../../../assets/img/profile/shoucang.png" alt="" />
                </div>
                <div class="right">
                  <div class="item-content">
                    <div class="title">{{ item.title }}</div>
                    <div class="context">{{ item.context }}</div>
                  </div>
                  <div class="img-box" v-if="currentType == 2 && fileList.length != 0">
                    <img :src="item" alt="" v-for="(item, i) in fileList[index]" :key="i" />
                  </div>
                </div>
              </div>

              <div class="item-footer">
                <span class="optionDate">{{ item.optionDate }}</span>
                <span class="clickCount">观看次数：{{ item.clickCount }}次</span>
              </div>
            </div>
          </template>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import TopNavBar from "./model/TopNavBar.vue";
import scroll from "@c/scroll/Scroll.vue";
import { getSharingSpace, getFileList } from "@/api";
export default {
  name: "SharingSpace",
  components: {
    TopNavBar,
    scroll
  },

  data() {
    return {
      fileList: [],
      dataList: [],
      currentType: 0,
      title: "燃放日常"
    };
  },

  computed: {
    optionType() {
      const { type } = this.$route.query;
      this.currentType = parseInt(type);
      let optionType = "";
      switch (this.currentType) {
        case 0:
          optionType = "OPTION_DAY";
          this.title = "燃放日常";
          break;
        case 1:
          optionType = "OPTION_VIDEO";
          this.title = "焰火视频";
          break;
        case 2:
          optionType = "OPTION_PIC";
          this.title = "精彩图文";
          break;
      }
      console.log(optionType);
      return optionType;
    }
  },

  created() {
    console.log(456456);
    const { type } = this.$route.query;
    this.currentType = parseInt(type);
    this.getSharingSpace();
  },

  methods: {
    // 获取列表
    getSharingSpace() {
      const params = {
        page: 0,
        pageSize: 0,
        shopUuid: this.$store.state.shopUuid,
        optionType: this.optionType
      };
      getSharingSpace(params).then(res => {
        if (res.state == 100) {
          this.dataList = [...res.items];
          this.dataList.forEach((item, index) => {
            this.getFileList(item.uuid, index);
          });
          this.$nextTick(() => {
            this.$refs.scroll.refresh();
          });
        }
      });
    },

    getFileList(uuid, index) {
      const params = {
        page: 0,
        pageSize: 0,
        parentUuid: uuid
      };
      getFileList(params).then(res => {
        if (res.state == 100) {
          if (this.currentType == 2) {
            let arr = res.items.map(item => item.filePath);
            this.$set(this.fileList, index, arr);
          } else {
            this.$set(this.fileList, index, res.items[0].filePath);
          }

          this.$nextTick(() => {
            this.$refs.scroll.refresh();
          });
        }
      });
    },

    //监听滚动事件
    contentScroll(position) {
      //1.判断BackTop是否显示
      // this.isShowBackTop = -position.y > BACKTOP_DISTANCE;
      //2.觉得tabControl是否吸顶
      // this.isTabFixed = -position.y > this.tabControl;
    },
    //加载更多
    loadMore() {
      // this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 100px;
  padding-top: 60px;
  height: 100vh;
  overflow: hidden;
  &::before {
    content: "";
    display: table;
  }

  .top-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
  }

  .scroll-box {
    width: 100%;
    height: calc(100vh - 60px);
    overflow: hidden;
    .content {
      width: 100%;
      height: calc(100vh - 60px);
      overflow: hidden;

      .list {
        padding-top: 5px;
        padding-bottom: 30px;

        .day-item,
        .video-item,
        .img-item {
          margin-bottom: 6px;
        }

        // 视频
        .video-item {
          width: 375px;
          background: #ffffff;

          .video-top {
            display: flex;
            padding: 15px 29px 11px 17px;

            .video-content {
              .title {
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #323232;
                margin-bottom: 10px;
              }

              .context {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #969696;
                line-height: 18px;
              }
            }

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 11px;
            }
          }

          .video {
            width: 375px;
            height: 210px;
            background-color: skyblue;
          }

          .item-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 38px;
            padding: 0 20px 0 18px;

            .optionDate {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #969696;
            }

            .clickCount {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #4d5aff;
            }
          }
        }

        // 燃放日常
        .day-item {
          background-color: #fff;
          display: flex;
          padding: 15px 20px 12px 17px;
          .left {
            width: 67px;
            padding-right: 11px;

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
            }
          }

          .right {
            flex: 1;

            .item-content {
              .title {
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #323232;
                margin-bottom: 10px;
              }

              .context {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #969696;
                line-height: 18px;
              }
            }

            .video {
              width: 158px;
              height: 211px;
              margin-top: 11px;
            }

            .item-footer {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 38px;

              .optionDate {
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #969696;
              }

              .clickCount {
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #4d5aff;
              }
            }
          }
        }

        // 图片
        .img-item {
          background-color: #fff;
          padding: 15px 20px 14px 19px;
          .top {
            display: flex;
            .left {
              width: 67px;
              padding-right: 11px;

              img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
              }
            }

            .right {
              flex: 1;
              .item-content {
                padding-right: 29px;
                margin-bottom: 11px;
                .title {
                  font-size: 15px;
                  font-family: PingFang SC;
                  font-weight: bold;
                  color: #323232;
                  margin-bottom: 10px;
                }

                .context {
                  font-size: 14px;
                  font-family: PingFang SC;
                  font-weight: 500;
                  color: #969696;
                  line-height: 18px;
                }
              }

              .img-box {
                width: 300px;

                img {
                  width: 93px;
                  height: 93px;
                  margin-bottom: 3px;
                  margin-right: 3px;
                }
              }
            }
          }

          .item-footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 38px;

            .optionDate {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #969696;
            }

            .clickCount {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #4d5aff;
            }
          }
        }
      }
    }
  }
}
</style>

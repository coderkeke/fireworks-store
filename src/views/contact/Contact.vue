<template>
  <div class="contact-container">
    <!-- 头部 -->
    <TopNavBar />
    <!-- 轮播图 -->
    <Swipe />

    <div class="advertising-box">
      <div class="advertising">
        <div class="advertising-item">
          <img class="advertising-img" src="~@/assets/img/contact/pinpai.png" alt="" />
          <span class="advertising-title">信赖品牌</span>
        </div>
        <div class="advertising-item">
          <img class="advertising-img" src="~@/assets/img/contact/pinzhi.png" alt="" />
          <span class="advertising-title">钻石品质</span>
        </div>
        <div class="advertising-item">
          <img class="advertising-img" src="~@/assets/img/contact/gongchang.png" alt="" />
          <span class="advertising-title">源头工厂</span>
        </div>
        <div class="advertising-item">
          <img class="advertising-img" src="~@/assets/img/contact/tuandui.png" alt="" />
          <span class="advertising-title">专业团队</span>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="footer">
      <div class="footer-contant">
        <img class="contant-img" src="@/assets/img/home/homeLogo.png" alt="" />
        <span class="contant-text">浏阳市恒天飞鹰烟花制造有限公司</span>
        <span class="contant-text"> 地址：澄潭江镇和家村</span>
        <span class="contant-text">电话：15575958599 </span>
        <span class="contant-text">联系人：刘鹏</span>
      </div>

      <div class="call">
        <img src="@/assets/img/contact/dianhua.png" alt="" />
        <span>拨打电话</span>
      </div>
      <div class="navigation">
        <img src="@/assets/img/contact/daohang.png" alt="" />
        <span>打开导航</span>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";
import Swipe from "./components/Swipe.vue";
export default {
  name: "Contact",
  components: {
    TopNavBar,
    Swipe
  }
};
</script>

<style lang="less" scoped>
.contact-container {
  padding-bottom: 100px;
  .advertising-box {
    position: relative;
    height: 70px;
    .advertising {
      width: 343px;
      height: 109px;
      background: #ffffff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
      position: absolute;
      left: calc(50% - 171.5px);
      top: -50px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .advertising-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .advertising-img {
          width: 38px;
          height: 38px;
        }

        .advertising-title {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #969696;
          line-height: 24px;
        }
      }
    }
  }

  .footer {
    width: 343px;
    height: 371px;
    background: #ffffff;
    border-radius: 20px;
    margin: 0 auto;
    padding: 29px 48px;

    .footer-contant {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .contant-img {
        width: 151px;
        margin-bottom: 19px;
      }

      .contant-text {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #969696;
        line-height: 24px;
      }
    }

    .call,
    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 226px;
      height: 50px;
      background: #00a2ff;
      box-shadow: 2px 2px 8px 0px rgba(61, 191, 252, 0.7);
      border-radius: 25px;

      margin: 26px 0;
      & > img {
        width: 27px;
        height: 27px;
        margin-right: 15px;
      }
    }

    .call {
      background: #37d503;
    }
  }
}
</style>

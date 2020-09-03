<template>
  <div>
    <div class="membercontent">
      <div class="base-info">
        <div class="user-look">
          <img :src="userlook" alt />
        </div>
        <div class="user-name">
          <p>我是一个快乐的猴子</p>
          <p>普通会员</p>
        </div>
        <van-icon class="setting" name="setting"></van-icon>
      </div>
      <div class="order">
        <van-nav-bar left-text="我的订单" right-text="全部订单 >" />
        <van-grid>
          <van-grid-item icon="credit-pay" text="代付款" />
          <van-grid-item icon="completed" text="代发货" />
          <van-grid-item icon="logistics" text="待收货" />
          <van-grid-item icon="cash-back-record" text="售后退款" />
        </van-grid>
      </div>
      <div class="youhui">
        <van-nav-bar left-text="我的电子卷" right-text="全部电子卷 >" />
        <van-grid column-num="3">
          <van-grid-item  icon="coupon-o" text="待使用" />
          <van-grid-item  icon="comment-o" text="已使用" />
          <van-grid-item  icon="peer-pay" text="过期关闭" />
        </van-grid>
      </div>
      <div class="other">
        <van-cell is-link @click="showPopup">我的收藏</van-cell>
        <van-cell is-link @click="showPopup">我的京豆</van-cell>
        <van-cell is-link @click="showPopup">收货地址</van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import userlook from "../../images/user.png";
export default {
  data() {
    return {
      userlook
    };
  },
  methods: {}
};
</script>

<style lang="scss" >
.membercontent .van-nav-bar__text {
     color: #000; 

}
.membercontent {
  position: relative;

  background-color: #dddddd38;
  .base-info {
    padding: 20px 30px;
    display: flex;
    flex-wrap: wrap;
    background-color: #eee;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
      margin-right: 30px;
      border-radius: 50%;
    }
    .setting {
      position: absolute;
      top: 50px;
      right: 5px;
      font-size: 25px;
      color: #525151;
    }
  }
}
</style>

<template>
  <div class="user-ex">
    <div class="item">
      <i class="el-icon-message" ></i>
      <span>我的消息</span>
    </div>
    <div class="item">
      <i class="el-icon-sell" ></i>
      <span>积分商城</span>
    </div>
    <div class="item">
      <i class="el-icon-coordinate" ></i>
      <span>会员卡</span>
    </div>
    <div class="item">
      <i class="el-icon-shopping-cart-2" ></i>
      <span>我的购物车</span>
    </div>
    <div class="item">
      <i class="el-icon-present" ></i>
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserEx',

  }
</script>

<style scoped>
  .user-ex {
    margin: 20px 0;
    background-color: #fff;
  }
  .item {
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-size: 15px;
    color: #333;
    height: 45px;
    line-height: 45px;
  }
  .item span {
    padding: 0 15px;
  }
</style>
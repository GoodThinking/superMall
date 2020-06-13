<template>
  <div class="detail-bottom-bar">
    <div class="bar-item left">
      <div>
        <i class="icon serve"></i>
        <div class="text">客服</div>  
      </div>
      <div>
        <i class="icon shop"></i>
        <div class="text">店铺</div>  
      </div>
      <div>
        <i class="icon select"></i>
        <div class="text">收藏</div>  
      </div>
    </div>
    <div class="bar-item right">
      <div class="cart" @click="handleClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      handleClick () {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 49px;
    display: flex;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .left .text {
    font-size: 13px;
  }
  .bar-item .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 7px auto 3px;
    background: url("../../../assets/images/detail/detail_bottom.png") 0 0/100%;
  }
  .left .service {
    background-position:0 -54px;
  }

  .left .shop {
    background-position:0 -98px;
  }
  .right {
    font-size: 15px;
    line-height: 49px;
  }
  .cart {
    background-color: #ffe817;
    color: #333;
  }
  .buy {
    background-color: #ff6699;
    color: #fff;
  }
</style>
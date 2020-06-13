<template>
  <div class="user-property">
    <div class="user-item">
        <div class="item-count">
          <span class="left">0.00</span>元
        </div>
        <div class="item-name">我的余额</div>
      </div>
      <div class="user-item">
        <div class="item-count">
          <span class="left">0</span>个
        </div>
        <div class="item-name">我的优惠</div>
      </div>
      <div class="user-item">
        <div class="item-count">
          <span class="left">0</span>分
        </div>
        <div class="item-name">我的积分</div>
      </div>
  </div>
</template>

<script>
  
  export default {
    name: 'UserProperty',
    data () {
      return {
        list: [
            {count: 0.00 , title: '我的余额', division: '元'},
            {count: 0 , title: '我的优惠', division: '个'},
            {count: 0, title: '我的积分', division: '分'}
        ]    
      }
    }
  }
</script>

<style scoped>
  .user-property {
    display: flex;
    height: 84px;
    text-align: center;
  }
  .user-item {
    flex: 1;
    color: #666;
    font-size: 13px;
    padding: 18px;
    background-color: #fff;

  }
  .left {
    color: #ff5f3e;
    font-size: 24px;
    font-weight: 700;
  }
  .active {
    border-right: 1px solid rgba(0, 0, 0, .1);
  }
  .item-count  {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  .item-name {
    margin-top: 5px;
  }
</style>
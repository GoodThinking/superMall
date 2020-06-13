<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="detail-title">{{goods.title}}</div>
    <div class="detail-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="d-price">{{goods.discount}}</span>
    </div>
    <div class="detail-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="detail-serve">
      <span class="serve-item" v-for="index in goods.services.length-1" :key="index"> 
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 10px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-title {
    color: #222;
    font-size: 20px;
  }
  .detail-price {
    margin-top: 10px;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 20px;
  }
  .o-price {
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 5px;
  }
  .d-price {
    margin-left: 5px; 
    padding: 2px 5px; 
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    font-size: 12px;

    /*让元素适当上浮只需要设置相对定位*/
    position: relative;
    top: -8px;
  }
  .detail-other {
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    margin-top: 12px;
    border-bottom: 1px solid rgba(100,100,100,0.1);
    margin-bottom: 8px;
    font-size: 13px;
  }
  .detail-serve {
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #222;
    font-size: 13px;
  }
  .detail-serve img {
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
  }
</style>
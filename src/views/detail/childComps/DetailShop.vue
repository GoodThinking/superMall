<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="middle-sells">
          <div class="sells-count">
            {{shop.sells }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="middle-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'better-score': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}" >
              <span>{{item.isBetter? '高': '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="bottom-enter">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShop',
    props: {
      shop: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding:15px 8px ;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .shop-top {
    line-height: 45px;
    display: flex;
    text-align: center;
  }
  .shop-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .2);
  }
  .shop-title {
    vertical-align: middle;
    margin-left: 15px;
  }
  .shop-middle {
    display: flex;
    text-align: center;
    margin-top: 30px;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .2);
    color: #222;
    margin-top: 20px;
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .sells-text, .goods-text {
    font-size: 12px;
    margin-top: 8px;
  }
  .shop-middle-right {
    font-size: 12px;
    color: #222;
  }
  .shop-middle-right table {
    margin-left: 30px;
    width: 120px;
  } 
  .shop-middle-right td {
    padding: 5px 0px;
  }
  .score {
    color: #5ea732;
  }
  .better-score {
    color: #f13e3a;
  }
  .better span {
    background-color:#5ea732 ;
    color: #fff;
    text-align: center;
  }
  .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    margin-top: 10px;
    text-align: center;
  }
  .bottom-enter {
    display: inline-block;
    background-color:#f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    border-radius: 10px;
  }
</style>
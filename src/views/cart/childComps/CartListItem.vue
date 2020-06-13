<template>
  <div class="list-item">
    <div class="check-box">
      <check-button :is-checked="itemInfo.isChecked" @click.native="handleChecked"/>
    </div>
    <div class="shop-img">
      <img :src="itemInfo.img" alt="" />
    </div>
    <div class="shop-info">
      <div class="title">{{itemInfo.title}}</div>
      <div class="desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="left">¥{{itemInfo.price}}</div>
        <div class="right">×{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'

  export default {
    name: 'CartListItem',
    props: {
      itemInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      handleChecked() {
        console.log(this.itemInfo.isChecked)
        this.itemInfo.isChecked = !this.itemInfo.isChecked
      }
    }
  }

</script>
  
<style scoped>
  .list-item {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #aaa;
    padding: 5px;
  }
  .check-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3px;
  }
  .shop-img {
    padding: 5px;
  }
  .shop-img img {
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }
  .shop-info {
    font-size: 17px;
    overflow: hidden;
    position: relative;
    color : #333;
    padding: 5px 10px;
  }
  .title,.desc {
    padding: 6px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .desc {
    font-size: 14px;
    color: #666;
  }
  .info-bottom {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 0;
  }
  .left {
    color: #ff4500;
  }
</style>
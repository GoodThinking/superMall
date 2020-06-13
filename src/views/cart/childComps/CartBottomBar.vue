<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="AllSelect" @click.native="handleChecked" />
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：¥{{ getTotalPrice }}</span>
    </div>
    <div class="buy">
      <span>去计算{{ getBuy }}</span>
    </div>
  </div>
</template>

<script>
  import  CheckButton from './CheckButton'
  import { mapGetters } from 'vuex'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['getCartList']),
      getTotalPrice() {
        console.log(this.getCartList.filter(item => item.isChecked).length)
        return this.getCartList.filter(item => {
          return item.isChecked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      getBuy() {
        return this.getCartList.filter(item => item.isChecked).length
      },
      AllSelect() {
        if(this.getCartList.length === 0) return false
        return !this.getCartList.find(item => !item.isChecked)
      }
    },
    methods: {
      handleChecked(){
        if(this.AllSelect){
          //当按钮为全选中时，点击将所有isChecked变成false
          this.getCartList.forEach(item => item.isChecked = false)
        }else {
          //当按钮不是全选中时，点击将所有isChecked变成true
          this.getCartList.forEach(item => item.isChecked = true)
        }
      }
    }
  }


</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    display: flex;
    background-color: #eee;
    height: 40px;
    line-height: 40px;
    box-shadow:  0 -2px 3px rgba(0, 0, 0, .2);
    position: fixed;
    font-size: 14px;
    left: 0;
    right: 0;
    bottom: 49px;
    justify-content: center;
  }
  .check-content {
    margin-left: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    line-height: 15px;
  }
  
  .total-price {
    font-size: 16px;
    margin-left: 10px;
    flex: 1;
  }
  .buy {
    width: 100px;
    background-color: #ff4500;
    color: #fff;
    text-align: center;
  }
</style>
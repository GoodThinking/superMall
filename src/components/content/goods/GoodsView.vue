<template>
  <div class="goods-view" v-if="Object.keys(goodsList).length !== 0">
    <goods-item class="goods-item" v-for="(item,index) in goodsList" :goodsItem="item" />
  </div>
</template>

<script>
    import GoodsItem from './GoodsItem.vue'
    export default {
        name: 'GoodsView',
        components: {
           GoodsItem 
        },
        props: {
           goodsList:{
               type: Array,
               default(){
                   return []
               }
           } 
        }
    }
</script>

<style scoped>
  .goods-view {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
  .goods-item {
    width: 48%;
  }
</style>
<template>
  <grid>
    <goods-item v-for="(item,index) in shopList" :goodsItem="item" :key="index" />
  </grid>
</template>

<script>
  import GoodsItem from '@/components/content/goods/GoodsItem'
  import Grid from '@/components/common/grid/Grid'

  export default {
    name: 'TabList',
    components: {
      GoodsItem,
      Grid
    },
    props: {
      shopList: {
        type: Array,
        default() {
          []
        }
      }
    }
  }

</script>

<style scoped>

</style>
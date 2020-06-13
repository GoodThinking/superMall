<template>
  <div class="cart-list">
    <Scroll class="content">
      <cart-list-item v-for="(item,index) in list" :key="index" :itemInfo="item" />
    </Scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import  CartListItem from './CartListItem'
  import Scroll from '@/components/common/scroll/Scroll'

  export default {
    name: 'CartList',
    computed: {
      ...mapGetters({
        'list': 'getCartList'
      })
    },
    components: {
      CartListItem,
      Scroll
    }
  }


</script>

<style scoped>
  .cart-list {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    width: 100%;
    bottom: 89px;
  }
  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
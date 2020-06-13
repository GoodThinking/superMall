<template>
  <div id="Cart">
    <nav-bar class="nav">
      <div slot="center">购物车({{count}})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>
  
<script>
  import { mapGetters } from 'vuex'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import NavBar from '@/components/common/navbar/navbar'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      //两种写法
      //...mapGetters(['getCartCount','getCartList'])
      ...mapGetters({
          'count': 'getCartCount'
      })
    }
  }
</script>
  
<style scoped>
  .cart {
    height: 100vh;
    position: relative;
  }
  .nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
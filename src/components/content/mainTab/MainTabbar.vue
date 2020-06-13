<template>
    <Tabbar>
        <tabbarItem path="/home">
          <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
          <img slot="item-icon" src="@/assets/images/tabbar/home.svg" >
          <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg" >
          <div slot="item-text">首页</div>
        </tabbarItem>
        <tabbarItem path="/category">
          <img slot="item-icon" src="@/assets/images/tabbar/category.svg" >
          <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg" >
          <div slot="item-text">品类</div>
        </tabbarItem>
        <tabbarItem path="/cart" >
          <img slot="item-icon" src="@/assets/images/tabbar/shopcart.svg" >
          <img slot="item-icon-active" src="@/assets/images/tabbar/shopcart_active.svg" >
          <div slot="item-text">购物车</div>
        </tabbarItem>
        <tabbarItem path="/user">
          <img slot="item-icon" src="@/assets/images/tabbar/profile.svg" >
          <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg" >
          <div slot="item-text">我的</div>
        </tabbarItem>
      </Tabbar>
</template>

<script>
    import Tabbar from '@/components/common/tabbar/Tabbar.vue'
    import tabbarItem from '@/components/common/tabbar/tabbarItem.vue'

    export default {
        name: "MainTabbar",
        components: {
            Tabbar,
            tabbarItem
        }
    }
</script>
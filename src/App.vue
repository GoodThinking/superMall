<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar />
  </div>
</template>

<script>
  //Object.defineProperty()
  import MainTabbar from '@/components/content/mainTab/MainTabbar.vue'
  export default {
    components: {
      MainTabbar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>

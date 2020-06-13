<template>
  <div id="User">
    <nav-bar class="nav-bar"><div slot="center">用户中心</div></nav-bar>
    <user-info />
    <user-property />
    <user-ex />
  </div>
</template>
  
<script>
  import NavBar from '@/components/common/navbar/navbar'
  import UserInfo from './childComps/UserInfo'
  import UserProperty from './childComps/UserProperty'
  import UserEx from './childComps/UserEx'
  export default {
    name: 'User',
    components: {
      NavBar,
      UserInfo,
      UserProperty,
      UserEx
    }
  }
</script>
  
<style scoped>
  #User {
    color: #aaa;
  }
   .nav-bar {
      font-size: 16px;
      background-color: var(--color-tint);
      color: #fff;
   } 
</style>
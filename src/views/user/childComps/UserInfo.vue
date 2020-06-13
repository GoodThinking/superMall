<template>
  <div class="user-info">
    <div class="user-img">
      <el-avatar :size="60" :src="circleUrl"></el-avatar>
    </div>
    <div class="user-login">
      <div class="user-left">
        <div>登录/注册</div>
        <div class="phone">
          <i class="el-icon-phone"></i>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="user-right">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo',
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    }
  }
</script>

<style scoped>
  .user-info {
    background-color: #ff8198;
    height: 90px;
    width: 100%;
    padding: 15px;
    display: flex;
  }
  .user-img {
    width: 60px;
  }
  .user-login {
    display: flex;
    padding: 10px;
    flex: 1;
  }
  .user-left {
    flex: 1;
    font-size: 16px;
    color: #fff;
  }
  .phone {
    margin-top: 10px;
    font-size: 13px;
  }
  .user-right {
    width: 20px;
  }


</style>
<template>
  <div class="toast-view" v-show="isToast">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data () {
      return {
        message: '',
        isToast: false    
      }
    },
    methods: {
      showToast(message, duration = 2000){
        this.message = message
        this.isToast = true

        setTimeout(()=>{
          this.isToast = false
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast-view {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    transform: translate(-50% , -50%);
    z-index: 999;
    padding: 8px 10px;
  }
</style>
<template>
  <div id="detail-tabbar">
    <navbar>
      <div slot="left" @click="handleBack" class="title-img">
        <img src="@/assets/images/common/back.svg" alt="" />
      </div>
      <div slot="center" class="detail-title">
        <div v-for="(item, index) in titles"
         class="title-item"
         :class="{active : index === currentIndex}"
         @click="changeTitle(index)">{{item}}</div> 
      </div> 
    </navbar>
  </div>  
</template>

<script>
  import navbar from '@/components/common/navbar/navbar.vue'  

  export default {
    name: 'DetailTabbar',
    data () {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      navbar  
    },
    methods: {
      changeTitle(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      handleBack(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail-title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1
  }
  .active {
    color: var(--color-high-text);
  }
  .title-img img {
    margin-top: 11px;
  }
</style>
<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" class="tab-item" 
    :class="{active: index === currentIndex }" @click="handleClick(index)">
      <span>{{item}}</span>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
        this.$emit('transform',index)
      }
    }
  }  
</script>

<style scoped>
  .tabControl {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    text-align: center;
    background-color: #fff;
  }
  .tab-item {
    flex: 1;
  }
  .tab-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 1px solid var(--color-tint);
  }
</style>
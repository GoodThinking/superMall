<template>
  <Scroll id="scroll">
    <div class="tab-menu">
      <div v-for="(item, index) in list" 
            :key="index"
            class="tab-menu-item"
            @click="handleClick(index)"
            :class="{ active:currentIndex === index }"
            >
        {{item.title}}
      </div>
    </div>
  </Scroll>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'

  export default {
    name: 'TabMenu',
    data () {
      return {
        currentIndex: 0 
      }
    },
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Scroll
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
  }
</script>

<style scoped>
  #scroll {
    height: 100%;
    width: 100px;
    background-color: #f6f6f6;
    box-sizing: border-box;
    overflow: hidden;
  }
  .tab-menu-item {
    height: 45px;
    width: 100px;
    line-height: 45px;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .active {
    color: #ff5777;
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
    font-weight: 700px;
  }
</style>
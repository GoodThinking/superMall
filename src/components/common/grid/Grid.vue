<template>
  <div class="grid" ref="grid">
    <slot></slot>
  </div>
</template>

<script>
  
  export default {
    name: 'Grid',
    props: {
      cols: {
        type: Number,
        default: 2
      },
      hMargin: {
        type: Number,
        default: 8
      },
      wMargin: {
        type: Number,
        default: 8
      },
      itemSpace: {
        type: Number,
        default: 8
      },
      lineSpace: {
        type: Number,
        default: 8
      }
    },
    mounted () {
      setTimeout(this._active, 20)
    },
    updated () {
      this._active()
    },
    methods: {
      _active() {
        let gridEl = this.$refs.grid
        let children = gridEl.children
        //jsp标签中的 ${表达bai式}用来输出或者计算一du个表达式的内容，比如${3+5}
        //设置grid的样式
        gridEl.style.padding = `${this.hMargin}px ${this.wMargin}px`
        //设置item的样式
        let itemWidth = (gridEl.clientWidth - 2*this.wMargin - (this.cols - 1)*this.itemSpace) /this.cols
        for(let i =0;i < children.length;i++) {
            let item = children[i]
            item.style.width = itemWidth + 'px'
            if((i+1) % this.cols!==0) {
              item.style.marginRight = this.itemSpace + 'px'
            }
            if(i >= this.cols) {
              item.style.marginTop = this.lineSpace + 'px'
            }
        }
      }
    }
  }
</script>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>
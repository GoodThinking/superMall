<template>
    <div class="tab-bar-item" @click="handleClick">
      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>
      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'tabbarItem',
      props:{
        path: String,
        activeColor: {
          default: 'red',
          type: String
        }
      },
      computed: {
        isActive () {
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle () {
          return this.isActive?{color : this.activeColor}:{}
        }
      },
      methods: {
        handleClick () {
          this.$router.push(this.path)
        }
      }
    }
</script>

<style>
  .tab-bar-item {
      flex: 1;
      height: 49px;
      text-align: center;
    }
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        margin-bottom: 3px;
    }
</style>
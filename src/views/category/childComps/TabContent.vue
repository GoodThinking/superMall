<template>
  <div class="tab-content">
    <grid :cols="3" :h-margin="20" :line-space="15" v-if="subcategories.list" >
      <div v-for="(item,index) in subcategories.list" :key="index" class="item">
        <a :href="item.link">
          <img :src="item.image" alt=""/>
          <div class="title">{{item.title}}</div>
        </a>
      </div>
    </grid>
  </div>
</template>

<script>
  import Grid from '@/components/common/grid/Grid'

  export default {
    name: 'TabContent',
    props: {
      subcategories: Object
    },
    components: {
      Grid
    }
  }
</script>

<style scoped>
  .item img {
    width: 80%;
  }
  .item {
    font-size: 12px;
    text-align: center;
    height: 100px;
  }
  .title {
    margin-top: 15px;
  }
</style>
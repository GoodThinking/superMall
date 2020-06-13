<template>
  <div class="detail-param" v-if="Object.keys(paramInfo).length !== 0">
    <table class="size-info" v-for="(table,index1) in paramInfo.sizes" :key="index1">
      <tr v-for="(tr,index2) in table" :key="index2">
        <td v-for="(td,index3) in tr">{{td}}</td>
      </tr>
    </table>
    <table class="param-info">
      <tr v-for="(info,index) in paramInfo.infos" :key="index">
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt=""/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParam',
    props: {
      paramInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-param {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .size-info {
    border-collapse: collapse;
    width: 100%;
  }
  .detail-param tr {
    border-bottom: 1px solid #f2f5f8;
    line-height: 42px;
    height: 42px;
    padding: 10px 0;
  }
  .info-key {
    width: 95px;
  }
  .info-value {
    color: #EB4868;
  }
  .info-img img {
    width: 100%;
  }
</style>
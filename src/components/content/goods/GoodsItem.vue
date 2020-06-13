<template>
    <div class="goods-item" @click="handleLink" v-if="Object.keys(goodsItem).length !== 0">
      <img v-lazy="showImg" @load="imgLoad" />
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>
  
<script>
      export default {
          name: 'GoodsItem',
          props: {
            goodsItem: {
              type: Object,
              default() {
                  return {}
              }
            }
          },
          computed: {
            showImg () {
              return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
            }
          },
          methods: {
            imgLoad(){
              this.$bus.$emit('itemImgLoad')
            },
            handleLink(){
              this.$router.push('/detail/' + this.goodsItem.iid)
            }
          }
      }
</script>
  
<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
  }
  .goods-item img {
    border-radius: 5px;
    width: 100%;
  }
  .goods-info {
    font-size: 14px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>
<template>
  <div id="detail">
    <detail-tabbar class="detail-tab" @titleClick="titleClick" ref="tab" />
    <Scroll class="content" ref="scroll" @scroll="tabChange" :probe-type="3">
      <detail-swiper :topImages="topImg" />
      <detail-base-info :goods="goods" />
      <detail-shop :shop="shop" />
      <detail-img :detailInfo="detailInfo" @imgLoad = "imgLoad"  />
      <detail-param :paramInfo= "paramInfo" ref="param" />
      <detail-comment :commentInfo="commentInfo" ref="comment"/>
      <goods-view :goodsList="recommendInfo" ref="recommend" />
    </Scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="handleBack" v-show="isShow" />
  </div>
</template>

<script>
  import DetailTabbar from './childComps/DetailTabbar'  
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShop from './childComps/DetailShop'
  import DetailImg from './childComps/DetailImg'
  import DetailParam from './childComps/DetailParam'
  import DetailComment from './childComps/DetailComment'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import Scroll from '@/components/common/scroll/Scroll'
  import GoodsView from '@/components/content/goods/GoodsView'

  import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/network/detail'
  import  {debounce} from '@/common/util'
  import {imgMixin,backTopImg} from '@/common/mixin' 
  import { mapActions } from 'vuex'

  export default {
    name: 'Detail',
    mixins: [imgMixin,backTopImg],
    data () {
      return {
        id: null,
        topImg: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendInfo : [],
        theTopY: [],
        theDebounce: null,
        currentIndex: 0
      }
    },
    components: {
      DetailTabbar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      DetailParam,
      DetailImg,
      DetailComment,
      DetailBottomBar,
      Scroll,
      GoodsView,
    },
    created () {
      this.id = this.$route.params.id

      getDetail(this.id).then( res =>{

        const data = res.data.result
        //请求顶部轮播图片
        this.topImg = data.itemInfo.topImages
        //请求商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //请求店铺信息
        this.shop = new Shop(data.shopInfo)
        //请求商品图片信息
        this.detailInfo = data.detailInfo
        //请求商品尺寸信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取评论信息
        if (data.rate.list) {
            this.commentInfo = data.rate.list[0];
        }
        //将theTopY的赋值进行防抖
        this.theDebounce = debounce(()=>{
            this.theTopY = []
            this.theTopY.push(0)
            this.theTopY.push(this.$refs.param.$el.offsetTop)
            this.theTopY.push(this.$refs.comment.$el.offsetTop)
            this.theTopY.push(this.$refs.recommend.$el.offsetTop)
        },200)
      })

      getRecommend().then( res => this.recommendInfo = res.data.data.list )
    },
    methods: {
      ...mapActions({
        'addShopCart' : 'addCart'
      }),
      //点击添加购物车
      addCart () {
        console.log('成功添加')
        const product = {}
        product.img = this.topImg[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.nowPrice
        product.id = this.id
        //this.$store.commit('addCart',product)
        this.addShopCart(product).then(res =>{
          console.log(res)
          this.$toast.showToast(res)
        })


      },
      //图片加载完成之后
      imgLoad(){
        this.$refs.scroll.refresh()
        //根据最新的数据，对于的dom是已经呗渲染出来的
        //但是图片没有加载完（目前获取到的offsetTop是没算图片的）
        //所以在图片加载完之后调用this.$nextTick(callback)
        this.theDebounce()
      },
      //点击tab栏移动到对应的区域
      titleClick(index){
        this.$refs.scroll.ScrollTo(0,-this.theTopY[index],200)
      },
      //移动当对应的区域时切换tab
      tabChange(position){
        //判断是否显示回到顶部
        this.demo(position)

        let positionY = -position.y
        let length = this.theTopY.length
        for(let i = 0; i < length; i++){
          if(this.currentIndex !== i && ((i < length-1 && positionY >= this.theTopY[i] && positionY < this.theTopY[i+1]) || 
          (i == length-1 && positionY >= this.theTopY[i]))){
            this.currentIndex = i
            this.$refs.tab.currentIndex = this.currentIndex
          }
        }
      }
    },
    //离开详情页之后取消重新计算better-scroll
    destroyed () {
      this.$bus.$off('itemImgLoad',this.itemRefresh)
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-tab {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
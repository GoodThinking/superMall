<template>
  <div id="Home">
    <navBar class="home-nav"><div slot="center">购物街</div></navBar>
    <tabControl class="tab-control" 
      :titles="['流行','新款','精选']" 
      @transform="transform" 
      ref="tabControl1" v-show="isTabShow" />
    <Scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="autoUp"
            :pull-up-load="true"
            @loadMore="loadMore">
      <div>
        <homeSwiper :banners="banners" @swiperLoad="swiperLoad" />
        <homeRecommend :recommend="recommend" />
        <homeFeature />
        <tabControl  :titles="['流行','新款','精选']" 
                      @transform="transform" 
                      ref="tabControl2" 
                      :class="{fixed: isTabShow}"/>
      <goods-view :goodsList="goods[currentType].list" />
      </div>
    </Scroll>
    <BackTop @click.native="handleBack" v-show="isShow" />
  </div>
</template>
  
<script>
    import navBar from '@/components/common/navbar/navbar'
    import tabControl from '@/components/content/tabControl/tabControl'
    import GoodsView from '@/components/content/goods/GoodsView'
    import Scroll from '@/components/common/scroll/Scroll'
    import BackTop from '@/components/content/backTop/BackTop'

    import homeSwiper from '@/views/home/childComps/homeSwiper'
    import homeRecommend from '@/views/home/childComps/homeRecommend'
    import homeFeature from '@/views/home/childComps/homeFeature'

    import {getHomeMultidata, getHomeData} from '@/network/home'

    import {debounce} from '@/common/util'
    import {imgMixin,backTopImg} from '@/common/mixin'
    export default {
      name: 'Home',
      mixins: [imgMixin,backTopImg],
      data () {
        return {
          banners: [],
          recommend: [],
          goods: {
            'pop': {page: 0, list: []},
            'new': {page: 0, list: []},
            'sell': {page: 0, list: []},
          },
          currentType: 'pop',
          tabOffset: 0,
          isTabShow: false,
          scrollY: 0,
        }
      },
      components: {
        navBar,
        homeSwiper,
        homeRecommend,
        homeFeature,
        tabControl,
        GoodsView,
        Scroll,
      },
      activated () {
        this.$refs.scroll.ScrollTo( 0, this.scrollY, 0 )
        this.$refs.scroll.refresh()
      },
      deactivated () {
        //当离开首页关闭图片加载完刷新功能
        this.$bus.$off('itemImgLoad',this.itemRefresh)
        this.scrollY = this.$refs.scroll.getScrollY()
      },
      created () {
        this.getHomeMultidata()
        this.getHomeData('pop')
        this.getHomeData('new')
        this.getHomeData('sell')
      },
      methods: {
        /*
        有关监听的方法
        */
        swiperLoad(){
          this.tabOffset = this.$refs.tabControl2.$el.offsetTop
        },
        loadMore(){
          this.getHomeData(this.currentType)
        },
        autoUp(position){
          //判断上拉到底是否显示
          this.demo(position)

          //判断tab是否吸顶
          this.isTabShow = -position.y > this.tabOffset

        },
        transform(index){
          switch(index){
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index

        },
        /*
        有关请求的方法
        */
        getHomeMultidata () {
          getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
          })
        },
        getHomeData (type) {
          const page = this.goods[type].page + 1
          getHomeData(type,page).then(res => {
            this.goods[type].list.push(...res.data.data.list) 
            this.goods[type].page += 1
            //完成上拉加载更多
            this.$refs.scroll.finishPullUp()
          })
        }
      }
    }
</script>
  
<style scoped>
  #Home {
    padding-top: 44px ;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: seashell;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }
  .tab-control {
    position: relative;
    z-index: 99
    /*
    position: sticky;
    top: 44px;
    z-index: 999;
    */ 
  }
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  /*
  .content {
    height: calc(100% - 93px)
    margin-top: 44px
    overflow: hidden
  }
  */
</style>
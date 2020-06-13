<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :list="categoryList" @selectItem="changeType" />
      <Scroll class="content-scroll">
        <div>
          <tab-content :subcategories="showSubCategories" />
          <tab-control :titles="['综合','新品','销量']" 
                        @transform="tabClick" />
          <tab-list :shopList="showCategoryDetail"/>
        </div>
      </Scroll>
    </div>
  </div>
</template>
  
<script>
  import navBar from '@/components/common/navbar/navbar'
  import Scroll from '@/components/common/scroll/Scroll'
  import TabControl from '@/components/content/tabControl/tabControl'
  import TabMenu from './childComps/TabMenu'
  import TabList from './childComps/TabList'
  import TabContent from './childComps/TabContent'


  import { getCategory, getSubcategory, getCategoryDetail } from '@/network/category'
  import { tabControlMixin } from '@/common/mixin'

  export default {
      name: 'Category',
      mixins: [tabControlMixin],
      components: {
        navBar,
        TabMenu,
        TabContent,
        TabControl,
        TabList,
        Scroll
      },
      computed: {
        showSubCategories() {
          if(this.currentIndex === -1) return {}
          return this.categoryData[this.currentIndex].subcategories
        },
        showCategoryDetail() {
          if(this.currentIndex === -1) return []
          return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
        }
      },
      created () {
        this._getCategory()
      },
      data() {
        return {
          categoryList: [],
          categoryData: {},
          currentIndex: -1
        }
      },
      methods: {
        _getCategory() {
          getCategory().then(res => {
            this.categoryList = res.data.data.category.list
            //console.log(res.data)
            for(let i = 0;i < this.categoryList.length;i++ ){
                this.categoryData[i] = {
                    subcategories: {},
                    categoryDetail: {
                        'pop': [],
                        'new': [],
                        'sell': []
                    }
                }
            }
            this._getSubcategories(0)
          })
        },
        _getSubcategories(index) {
          this.currentIndex = index
          const maitKey = this.categoryList[index].maitKey
          getSubcategory(maitKey).then(res=> {
            this.categoryData[index].subcategories = res.data.data
            this.categoryData = {...this.categoryData}
            this._getCategoryDetail('pop')
            this._getCategoryDetail('sell')
            this._getCategoryDetail('new')
          })
        },
        _getCategoryDetail(type) {
          const miniWallkey = this.categoryList[this.currentIndex].miniWallkey
          getCategoryDetail(miniWallkey,type).then(res => {
            this.categoryData[this.currentIndex].categoryDetail[type] = res.data
            this.categoryData = {...this.categoryData}
          })
        },
        changeType(index) {
          this._getSubcategories(index)
        }
      }
  }
</script>
  
<style>
  .category {
    position: relative;
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
  .content-scroll {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
</style>
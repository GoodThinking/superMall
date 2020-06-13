import {debounce} from './util'
import BackTop from '@/components/content/backTop/BackTop'

export const imgMixin = {
    data () {
        return {
            itemRefresh: null
        }
    },
    mounted () {
        //图片加载完成的事件监听
        const refresh = debounce(this.$refs.scroll.refresh,200)

        this.itemRefresh = ()=> refresh() 
        this.$bus.$on('itemImgLoad',this.itemRefresh) 
        console.log('完成混入')
      },
}

export const backTopImg = {
    data () {
        return {
            isShow: false,
        }
    },
    methods: {
        handleBack(){
            this.$refs.scroll.ScrollTo(0,0)
        },
        demo(position){
            this.isShow = -position.y > 1000
        },
    },
    components: {
        BackTop 
    }
}

export const tabControlMixin = {
    data() {
      return {
        currentType: 'pop'
      }
    },
    methods: {
      tabClick(index) {
        switch (index) {
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
        console.log(this.currentType);
      }
    }
  }
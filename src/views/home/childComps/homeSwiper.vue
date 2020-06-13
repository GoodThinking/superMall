<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.image" >
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad" />  
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
    import {Swiper,SwiperItem} from '@/components/common/swiper'

    export default {
      name: 'homeSwiper',
      props: {
        banners: {
          type: Array,
          default () {
            return []
          }
        }
      },
      data () {
        return {
          isLoad: true
        }
      },
      components: {
        Swiper,
        SwiperItem
      },
      methods: {
        imgLoad(){
          if(this.isLoad){
            this.$emit('swiperLoad')
            this.isLoad = false
          }
          
        }
      }
    }
</script>

<style>

</style>
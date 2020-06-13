<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0">
    <div class="top">
      <div class="top-left">用户评价</div>
      <div class="top-right">
        更多
        <i class="right-arrow"></i>
      </div>
    </div>
    <div class="user">
      <div class="user-img">
        <img :src="commentInfo.user.avatar" alt="" />
        <span class="user-name">{{commentInfo.user.uname}}</span>
      </div>
    </div>
    <div class="bottom">
      <p>{{commentInfo.content}}</p>
      <div class="bottom-info">
        <span class="bottom-right">{{commentInfo.created | showDate}}</span>
        <span class="bottom-left">{{commentInfo.style}}</span>
      </div>
      <div class="bottom-img">
        <img :src="item" v-for="(item, index) in commentInfo.images"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from '@/common/util.js'
 
  export default {
    name: 'DetailComment',
    props: {
      commentInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      showDate (value) {
        const date = new Date(value*1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 10px 15px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .top {
    display: flex;
    line-height: 50px;
    height: 50px;
    border-bottom: 2px solid #f2f5f8;
    justify-content: space-between;
    text-align: center;
  }
  .top-left {
    font-size: 15px;
    float: left;
  }
  .top-right {
    font-size: 13px;
    float: right;
    margin-right: 10px;
  }
  .user {
    padding: 5px 5px;
  }
  .user-img img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .user-name {
    font-size: 15px;
    margin-left: 10px;
    position: relative;
    top: -15px;
  }
  .bottom {
    padding: 0 12px 5px;
    font-size: 14px;
    color: #777777;
  }
  .bottom-info {
    font-size: 12px;
    margin: 20px 0;
  }
  .bottom-left {
    margin-left: 10px;
  }
  .bottom-img img {
    width: 100%;
  }
</style>
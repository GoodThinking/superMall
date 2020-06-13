<template>
  <div class="check" :class="{active: isChecked}">
    <img src="@/assets/images/cart/tick.svg" alt=""/>
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isChecked: {
        type: Boolean,
        default () {
          return true
        }  
      }
    }
  }

</script>

<style scoped>
  .check {
    border-radius: 50%;
    border: 1px solid #aaa;
  }
  .active {
    background-color: red;
    border: 1px solid red;
  }
</style>
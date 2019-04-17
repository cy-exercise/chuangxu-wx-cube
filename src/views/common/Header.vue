<template>
  <div class="header" :class="{is_white: is_white}">

  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: {
        default: '个人中心'
      },
      to: {
        default: '/agent'
      },
      is_white: {
        default: false
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .header {
    height: .8rem;
  }
  .is_white .mint-header {
    background: #ffffff;
  }
  .mint-header {
    background: #F8F8F8;
    color: #515151;
    font-size: .36rem;
  }

  >>> .mintui {
    font-size: .4rem;
  }
</style>

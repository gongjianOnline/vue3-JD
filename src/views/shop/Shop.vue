<template>
  <div class="wrapper">
    <ShopInfo :item="item" :hideBorder="false"/>
  </div>
</template>
<script>
import ShopInfo from '../../components/shopInfo'
export default {
  name: 'shop',
  components: {
    ShopInfo
  },
  setup () {
    const item = {
      _id: '1',
      name: '沃尔沃',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIPxxxxxxxx'
    }
    return {
      item
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  padding: 0 .18rem;
}
</style>

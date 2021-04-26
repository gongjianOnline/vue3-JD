<template>
  <div class="cart">
    <div class="check">
      <div class="check_icon">
        <img class="check_icon_img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check_icon_tag">{{total || 0}}</div>
      </div>
      <div class="check_info">
        总计: <span class="check_info_price">&yen; {{price}}</span>
      </div>
      <div class="check_btn">去结算</div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
// 获取购物车信息逻辑
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const carList = store.state.cartList
  const shopId = route.params.id
  const total = computed(() => {
    const productList = carList[shopId]
    let count = 0
    if (!productList) { return 0 }
    /* eslint-disable */
    for (let i in productList) {
      const product = productList[i]
      count += product.count
    }
    /* eslint-enable */
    return count
  })
  const price = computed(() => {
    const productList = carList[shopId]
    let count = 0
    if (!productList) { return 0 }
    /* eslint-disable */
    for (let i in productList) {
      const product = productList[i]
      count += (product.count * product.price)
    }
    /* eslint-enable */
    return count.toFixed(2)
  })
  return { total, price }
}
export default {
  name: 'cart',
  setup () {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}
</script>
<style lang="scss" scoped>
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check{
  display: flex;
  box-sizing: border-box;
  height: .49rem;
  border-top: .01rem solid #f1f1f1;
  line-height: 0.49rem;
  &_icon{
    width:.84rem;
    position: relative;
    &_img{
      width: .28rem;
      height: .26rem;
      display: block;
      margin: .12rem auto;
    }
    &_tag{
      position: absolute;
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: .2rem;
      background: #e93f3f;
      border-radius: 50%;
      font-size: .12rem;
      line-height: .2rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
    }
  }
  &_info{
    flex:1;
    line-height: .49rem;
    color: #333;
    font-size: .12rem;
    &_price{
      color: #e93b3b;
      font-size: .18rem;
    }
  }
  &_btn{
    width: .98rem;
    line-height: .49rem;
    background-color: #4fb0f9;
    color: #fff;
    font-size: .14rem;
    text-align: center;
  }
}
</style>

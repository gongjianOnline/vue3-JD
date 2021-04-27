<template>
  <div class="cart">
    <div class="product">
      <div class="product_item" v-for="item in productList" :key="item._id">
        <img class="product_item_img" :src="item.imgUrl" alt="">
        <div class="product_item_detail">
          <h4 class="product_item_title">{{item.name}}</h4>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span> {{item.price}}
            <span class="product_item_origin">&yen; {{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus" @click="()=>{changeItemInfo(shopId, item._id, item, -1)}">-</span>
          {{item.count || 0}}
          <span class="product_number_add" @click="()=>{changeItemInfo(shopId, item._id, item, 1)}">+</span>
        </div>
      </div>
    </div>

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
const useCartEffect = (shopId) => {
  const store = useStore()
  const carList = store.state.cartList
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
  const productList = computed(() => {
    const productList = carList[shopId] || []
    return productList
  })
  return { total, price, productList }
}
export default {
  name: 'cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList } = useCartEffect(shopId)
    return { total, price, productList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
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
.product{
  flex:1;
  overflow: scroll;
  background-color: #fff;
  &_item{
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    position: relative;
    &_detail{
      overflow: hidden;
    }
    &_img{
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &_title{
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      margin: 0;
      @include ellipsis;
    }
    &_price{
      margin:.06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color:#E93b3b
    }
    &_yen{
      font-size: .12rem;
    }
    &_origin{
      line-height: .2rem;
      font-size: .12rem;
      color:#999;
      text-decoration: line-through;
      margin-left: .06rem;
    }
    .product_number{
      position:absolute;
      bottom: .12rem;
      right: 0rem;
      &_minus,&_add{
        width: .2rem;
        height: .2rem;
        display: inline-block;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
        line-height: .16rem;
        border: 1px solid #666;
      }
      &_minus{
        margin-right: .05rem;
      }
      &_add{
        background-color: #0091ff;
        color: #fff;
        border-color: #fff;
        margin-left: .05rem;
      }
    }
  }
}
</style>

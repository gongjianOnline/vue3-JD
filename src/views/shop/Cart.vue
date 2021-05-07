<template>
  <div
  class="mask"
  @click="hanleCartShowChange"
  v-show="showChart && calculations.total>0"></div>
  <div class="cart">
    <div class="product" v-show="showChart && calculations.total>0">
      <div class="product_header">
        <div class="product_header_all" @click="()=>setCartItemChecked(shopId)">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="calculations.allChecked?'#iconchecked':'#iconicons-'"></use>
          </svg>
          全选
        </div>
        <div class="product_header_clear">
          <span @click="()=>cleanCartProducts(shopId)">清空购物车</span>
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product_item" v-if="item.count > 0">
          <div class="product_item_checked" @click="()=>changeCartItemChecked(shopId, item._id)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.check == true?'#iconchecked':'#iconicons-'"></use>
            </svg>
          </div>
          <img class="product_item_img" :src="item.imgUrl" alt="">
          <div class="product_item_detail">
            <h4 class="product_item_title">{{item.name}}</h4>
            <p class="product_item_price">
              <span class="product_item_yen">&yen;</span> {{item.price}}
              <span class="product_item_origin">&yen; {{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product_number">
            <span
            class="product_number_minus"
            @click="()=>{changeCartItemInfo(shopId, item._id, item, -1)}">-</span>
            {{item.count || 0}}
            <span
            class="product_number_add"
            @click="()=>{changeCartItemInfo(shopId, item._id, item, 1)}">+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check_icon">
        <img
        class="check_icon_img"
        src="http://www.dell-lee.com/imgs/vue3/basket.png"
        alt=""
        @click="hanleCartShowChange">
        <div class="check_icon_tag">{{calculations.total || 0}}</div>
      </div>
      <div class="check_info">
        总计: <span class="check_info_price">&yen; {{calculations.price}}</span>
      </div>
      <div class="check_btn">
        <router-link :to="{path:`/orderConfimation/${shopId}`}">去结算</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const { changeCartItemInfo, productList } = useCommonCartEffect(shopId)
  const store = useStore()
  const carList = store.state.cartList
  const calculations = computed(() => {
    const productList = carList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true }
    if (!productList) { return 0 }
    /* eslint-disable */
    for (let i in productList) {
      const product = productList[i]
      result.total += product.count
      if (product.check) {
        result.price += (product.count * product.price)
      }
      if (product.count > 0 && !product.check) {
        result.allChecked = false
      }
    }
    /* eslint-enable */
    result.price = result.price.toFixed(2)
    return result
  })
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('chngecartItemChecked', {
      shopId, productId
    })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemChecked = (shopId) => {
    store.commit('setCartItemChecked', { shopId })
  }
  return {
    calculations,
    productList,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemChecked
  }
}
// 展示隐藏购物车逻辑
const toggleCartEffect = () => {
  const showChart = ref(false)
  const hanleCartShowChange = () => {
    showChart.value = !showChart.value
  }
  return { showChart, hanleCartShowChange }
}
export default {
  name: 'cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { showChart, hanleCartShowChange } = toggleCartEffect()
    const {
      calculations,
      productList,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemChecked
    } = useCartEffect(shopId)
    return {
      calculations,
      productList,
      shopId,
      changeCartItemInfo,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemChecked,
      showChart,
      hanleCartShowChange
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
a{
  color:#fff;
  text-decoration: none;
}
.mask{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
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
  &_header{
    display: flex;
    height: .42rem;
    border-bottom: 1px solid #f1f1f1;
    line-height: .42rem;
    &_all{
      width: .64rem;
      margin-left: .18rem;
      .icon{
        font-size: .2rem;
        display: inline-block;
        fill:#0091FF;
      }
    }
    &_clear{
      font-size: .14rem;
      color: #333;
      margin-right: .16rem;
      flex: 1;
      text-align: right;
    }
  }
  &_item{
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    position: relative;
    &_checked{
      .icon{
        color: #0091FF
      }
      line-height: .5rem;
      margin-right: .2rem;
      font-size: .2rem;
    }
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

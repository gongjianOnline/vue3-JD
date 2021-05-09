<template>
  <div class="cart">
    <div class="cart_title">我的全部购物车</div>
    <div class="cartList">
      <div class="shop" v-for="(item,index) in cartListInit" :key="index">
        <div class="shop_title">{{item.name}}</div>
        <div class="products">
          <div class="products_list">
            <div class="products_item" v-for="(productListItem,productListIndex) in item.productList" :key="productListIndex">
              <img :src="productListItem.imgUrl" alt="" class="products_item_img">
              <div class="products_item_detail">
                <h4 class="products_item_title">{{productListItem.name}}</h4>
                <p class="products_item_price">
                  <span><span class="products_item_yen">￥</span>  {{productListItem.price}} x {{productListItem.count}} </span>
                  <span class="products_item_total"><span class="products_item_yen">￥</span>  {{productListItem.price*productListItem.count}} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="1"/>
</template>
<script>
import Docker from '../../components/Docker'
import { useCommonCartEffect } from '../../effects/cartEffects'
const carListInitEffect = (cartList) => {
  const cartListInit = []
  /* eslint-disable */
  for(let key in cartList) {
    const cartListItem = {
      name: cartList[key].shopName,
      productList:[]
    }
    for(let i in cartList[key].productList){
      cartListItem.productList.push(cartList[key].productList[i])
    }
    cartListInit.push(cartListItem)
  }
  /* eslint-enable */
  return { cartListInit }
}
export default {
  name: ' CartList',
  components: { Docker },
  setup () {
    const { cartList } = useCommonCartEffect()
    const { cartListInit } = carListInitEffect(cartList)
    return { cartListInit }
  }
}
</script>
<style lang="scss" scoped>
.cart{
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: rgb(245, 244, 244);
}
.cart_title{
  background: #fff;
  line-height: .44rem;
  font-size: .16rem;
  text-align: center;
}
.cartList{
  overflow-y: scroll;
  position: absolute;
  top: .6rem;
  right: .18rem;
  bottom: .66rem;
  left: .18rem;
  background: #fff;
}
.shop_title{
  padding: .16rem;
  font-size: .16rem;
  color: #333;
}
.products{
  &_item{
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem .16rem;
    &_img{
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &_detail{
      flex: 1;
    }
    &_title{
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &_price{
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #e93b3b;
    }
    &_yen{
      font-size: .12rem;
    }
    &_total{
      flex: 1;
      text-align: right;
      color: #000;
    }
  }
}
</style>

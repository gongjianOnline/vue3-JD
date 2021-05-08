<template>
  <div class="cart">
    <div class="cart_title">我的全部购物车</div>
    <div class="cartList">
      <div class="shop">
        <div class="shop_title">xxx</div>
        <div class="products">
          <div class="products_list">
            <div class="products_item">
              <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" class="products_item_img">
              <div class="products_item_detail">
                <h4 class="products_item_title">番茄 250g / 份</h4>
                <p class="products_item_price">
                  <span><span class="products_item_yen">￥</span>  33.6 x 1 </span>
                  <span class="products_item_total"><span class="products_item_yen">￥</span>  33.60 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker/>
</template>
<script>
import Docker from '../../components/Docker'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: ' CartList',
  components: { Docker },
  setup () {
    const { cartList } = useCommonCartEffect()
    let cartList_init = []
    /* eslint-disable */
    for(let key in cartList) {
      const cartList_item = {
        name: cartList[key].shopName,
        productList:[]
      }
      for(let i in cartList[key].productList){
        cartList_item.productList.push(cartList[key].productList[i])
      }
      cartList_init.push(cartList_item)
    }
    /* eslint-enable */
    console.log(cartList_item)
    return {}
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

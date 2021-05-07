<template>
  <div class="wrapper">
    <TopArea />
    <div class="products">
      <div class="products_title">{{shopName}}</div>
      <div class="products_wrapper">
        <div class="products_list">
          <template v-for="(item) in productList" :key="item._id">
            <div class="products_item" v-if="item.count > 0">
              <img class="products_item_img" :src="item.imgUrl" alt="" />
              <div class="products_item_detail">
                <h4 class="products_item_title">{{item.name}}</h4>
                <p class="products_item_price">
                  <span class="">
                    <span class="products_item_yen">&yen;</span>{{item.price}} x {{item.count}}
                  </span>
                  <span class="products_item_total">
                    <span class="products_item_yen">&yen;</span>{{(item.price * item.count).toFixed(2)}}
                  </span>
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="order_price">实付金额 <b>￥{{calculations.price}}</b></div>
      <div class="order_btn">提交订单</div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import TopArea from './TopArea'
export default {
  name: 'OrderConfirmation',
  components: { TopArea },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const shopId = route.params.id
    const { productList, shopName, calculations } = useCommonCartEffect(shopId)
    const handleBackClick = () => {
      router.back()
    }
    return { productList, shopName, calculations, handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/mixins.scss";
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}

.products{
  margin: .16rem .18rem .1rem .18rem;
  background: #fff;
  &_wrapper{
    overflow-y: scroll;
    position: absolute;
    top: 2.6rem;
    left: 0;
    right: 0;
    bottom: .6rem;
    margin: 0 .18rem;
  }
  &_title{
    padding: .16rem .16rem .16rem .16rem;
    font-size: .16rem;
    color: #333;
  }
  &_list {
    background: #fff;
    padding-bottom: .16rem;
  }
  &_item {
    display: flex;
    padding: 0.16rem .16rem 0 .16rem;
    position: relative;
    &_img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &_detail {
      flex: 1;
    }
    &_title {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      margin: 0;
      @include ellipsis;
    }
    &_price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &_total{
      flex: 1;
      text-align: right;
      color:#000;
    }
    &_yen {
      font-size: 0.12rem;
    }
  }
}
.order{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  &_price{
    flex: 1;
    background: #fff;
    text-indent: .24rem;
    font-size: .14rem;
    color: #333;
  }
  &_btn{
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}
</style>

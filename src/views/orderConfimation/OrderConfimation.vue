<template>
  <div class="wrapper">
    <div class="top">
      <div class="top_header">
        <svg class="icon iconback" aria-hidden="true" @click="handleBackClick">
          <use xlink:href="#iconback"></use>
        </svg>
        确认订单
      </div>
      <div class="top_receiver">
        <div class="top_receiver_title">收货地址</div>
        <div class="top_receiver_address">南开大学远程教育学院</div>
        <div class="top_receiver_info">
          <span class="top_receiver_info_name">小明</span>
          <span class="top_receiver_info_name">15031616161</span>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconback-right"></use>
          </svg>
        </div>
      </div>
    </div>

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
                    <span class="products_item_yen">&yen;</span>{{item.price * item.count}}
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
export default {
  name: 'OrderConfirmation',
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
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;
  &_header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    font-size: 0.16rem;
    .iconback {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
  }
  &_receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: 0.04rem;
    &_title {
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: #333;
      line-height: 0.22rem;
    }
    &_address {
      padding: 0 0.4rem 0 0.16rem;
      color: #333;
      font-size: 0.14rem;
      line-height: 0.2rem;
    }
    &_info {
      padding: 0.06rem 0 0 0.16rem;
      &_name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
    .right {
      display: inline-block;
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      transform: translateY(-0.025rem);
      color: #666;
      font-size: 0.16rem;
    }
  }
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

<template>
  <div class="order">
    <div class="order_price">
      实付金额 <b>￥{{ calculations.price }}</b>
    </div>
    <div class="order_btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask_content">
      <h3 class="mask_content_title">确认要离开的收银台?</h3>
      <p class="mask_content_desc">请尽快完成支付,否则将被取消</p>
      <div class="mask_content_btns">
        <div class="mask_content_btn mask_content_btn-first"
        @click="()=>handleConfirmOrder(true)">取消订单</div>
        <div class="mask_content_btn mask_content_btn-last"
        @click="()=>handleConfirmOrder(false)">确认支付</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../utils/request.js'
import { useStore } from 'vuex'
export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const shopId = route.params.id
    const { calculations, shopName, productList } = useCommonCartEffect(shopId)
    const handleConfirmOrder = async (isCanceled) => {
      const products = []
      /* eslint-disable */
      for (let key in productList.value) {
        const product = productList.value[key]
        products.push({ id: product._id, num: product.count })
      }
      /* eslint-enable */
      try {
        const response = await post('/api/order', {
          addressId: 1,
          shopId,
          shopName: shopName.value,
          isCanceled,
          products
        })
        if (response?.data?.errno === 0) {
          store.commit('clearcarData', shopId)
          router.push({ name: 'Home' })
        }
      } catch (e) {
        console.log('失败信息', e)
      }
    }
    return { calculations, handleConfirmOrder }
  }
}
</script>
<style lang="scss" scoped>
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
.mask{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1;
  &_content{
    width: 3rem;
    height: 1.56rem;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: .04rem;
    text-align: center;
    &_title{
      margin: .24rem 0 0 0;
      font-size: .18rem;
      color: #333;
      text-align: center;
    }
    &_desc{
      font-size: .14rem;
      color: #333;
      margin:0.08rem 0 0 0;
    }
    &_btns{
      display: flex;
      margin: .24rem .58rem;
    }
    &_btn{
      flex: 1;
      border-radius: .16rem;
      width: .8rem;
      line-height:.32rem;
      font-size: .14rem;
      &-first{
        margin-right: .12rem;
        border: .01rem solid #4fb0f9;
        color: #4fb0f9;
      }
      &-last{
        margin-left: .12rem;
        background: #4FB0F9;
        color: #fff;
      }
    }
  }
}
</style>

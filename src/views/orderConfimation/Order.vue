<template>
  <div class="order">
    <div class="order_price">
      实付金额 <b>￥{{ calculations.price }}</b>
    </div>
    <div class="order_btn">提交订单</div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'
export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)
    return { calculations }
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
</style>

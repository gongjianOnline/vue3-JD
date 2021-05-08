<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div class="order" v-for="(item,index) in list" :key="index">
        <div class="order_title">
          {{item.shopName}}
          <span class="order_status">
            {{item.isCanceked?'已取消':'已下单'}}
          </span>
        </div>
        <div class="order_content">
          <div class="order_content_imgs">
            <img :src="innerItem.product.img"
              alt=""
              class="order_content_img"
              v-for="(innerItem,innerIndex) in item.products"
              :key="innerIndex">
          </div>
          <div class="order_content_info">
            <div class="order_content_price">￥ {{item.totalPorce}}</div>
            <div class="order_content_count">共 {{item.totalNumber}} 件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Docker :currentIndex="2"/>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker'
// 处理订单列表
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const response = await get('/api/order')
    if (response?.data?.errno === 0 && response?.data?.data?.length) {
      data.list = response.data.data
      const orderList = response.data.data
      orderList.forEach((item) => {
        const products = item.products
        /* eslint-disable */
        let totalPorce = 0
        let totalNumber = 0
        products.forEach((productsItem) => {
          totalNumber += (productsItem?.orderSales || 0)
          totalPorce += ((productsItem?.product?.price * productsItem?.orderSales) || 0)
        })
        /* eslint-enable */
        item.totalPorce = totalPorce
        item.totalNumber = totalNumber
      })
      data.list = response.data.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}
export default {
  name: 'OrderList',
  components: { Docker },
  setup () {
    const { list } = useOrderListEffect()
    return { list }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top:0;
  bottom:0.5rem;
  right: 0;
  background: rgb(248, 248, 248);
}
.title{
  line-height: .44rem;
  background: #fff;
  color: #333;
  font-size: .16rem;
  text-align: center;
}
.orders{}
.order{
  padding: .16rem;
  background: #fff;
  margin: .16rem .18rem;
  &_title{
    margin-bottom: .16rem;
    line-height:.22rem;
    font-size: .16rem;
    color:#333;
  }
  &_status{
    float:right;
    font-size: .14rem;
    color: #999;
  }
  &_content{
    display: flex;
    &_imgs{
      flex: 1;
    }
    &_img{
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &_info{
      width: .7rem;
    }
    &_price{
      margin-bottom: .04rem;
      line-height: .2rem;
      font-size: .14rem;
      color: #E93B3B;
      text-align: right;
    }
    &_count{
      font-size: .12rem;
      color:#333;
      text-align: right;
      line-height: .14rem;
    }
  }
}
</style>

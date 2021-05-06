<template>
  <div class="content">
    <div class="category">
      <!-- category_item-active -->
      <div class="category_item"
      :class="{'category_item-active':currentTab===item.type}"
      v-for="item in categories"
      :key="item.type"
      @click="()=>handleTabClick(item.type)">{{item.name}}</div>
    </div>
    <div class="product">
      <div class="product_item" v-for="item in list" :key="item._id">
        <img class="product_item_img" :src="item.imgUrl" alt="">
        <div class="product_item_detail">
          <h4 class="product_item_title">{{item.name}}</h4>
          <p class="product_item_sales">月售{{item.sales}}</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span> {{item.price}}
            <span class="product_item_origin">&yen; {{item.oldPrice}}</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus" @click="()=>{changeCartItem(shopId, item._id, item, -1, shopName)}">-</span>
          {{getProductCartCount(shopId, item._id)}}
          <span class="product_number_add" @click="()=>{changeCartItem(shopId, item._id, item, 1, shopName)}">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'
import { useCommonCartEffect } from './commonCartEffect'

const categories = [
  {
    name: '全部商品',
    type: 'all'
  },
  {
    name: '秒杀',
    type: 'seckill'
  },
  {
    name: '新鲜水果',
    type: 'fruit'
  }
]
// tab 切换
const usetabEffect = () => {
  const currentTab = ref(categories[0].type)
  const handleTabClick = (tag) => {
    // getContentData(tag)
    currentTab.value = tag
  }
  return { currentTab, handleTabClick }
}

// 列表内容相关
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({
    list: []
  })
  // 获取列表内容
  const getContentData = async () => {
    const response = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (response?.data?.errno === 0 && response?.data?.data?.length) {
      content.list = response.data.data
    }
  }
  watchEffect(() => {
    getContentData()
  })
  const { list } = toRefs(content)
  return { list }
}

const useCartEffect = () => {
  const store = useStore()
  const { changeCartItemInfo, cartList } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', {
      shopId,
      shopName
    })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  const getProductCartCount = (shopId, productId) => {
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { changeCartItem, cartList, getProductCartCount }
}
export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = usetabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { changeCartItem, cartList, getProductCartCount } = useCartEffect()
    return {
      getProductCartCount,
      categories,
      currentTab,
      handleTabClick,
      list,
      shopId,
      cartList,
      changeCartItem
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category{
  width: .76rem;
  background-color: #f5f5f5;
  height: 100%;
  overflow: scroll;
  &_item{
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    &-active{
      background-color: #fff;
    }
  }
}
.product{
  flex:1;
  overflow: scroll;
  &_item{
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    position: relative;
    &_detail{
      overflow: hidden;
    }
    &_img{
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &_title{
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      margin: 0;
      @include ellipsis;
    }
    &_sales{
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color:#333
    }
    &_price{
      margin:0;
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

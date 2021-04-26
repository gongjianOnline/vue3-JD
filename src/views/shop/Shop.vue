<template>
  <div class="wrapper">
    <div class="search">
      <div class="search_back" @click="handleBackClick">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconback"></use>
        </svg>
      </div>
      <div class="search_content">
        <span class='search_content_icon'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconseachx"></use>
          </svg>
        </span>
        <input class="search_content_input" placeholder="请输入商品名称"/>
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="false" v-show="item.imgUrl"/>
    <Content/>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import ShopInfo from '../../components/shopInfo'
import Content from './Content'
// ShopInfo组件数据维护 , 获取当前数据信息
const useShopEffect = () => {
  const route = useRoute()
  const pageId = route.params.id
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const response = await get(`/api/shop/${pageId}`)
    if (response?.data.errno === 0 && response?.data?.data) {
      data.item = response.data.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}
// 返回按钮逻辑维护
const useBackRoutereffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const { item, getItemData } = useShopEffect()
    getItemData()
    const { handleBackClick } = useBackRoutereffect()
    return {
      item,
      handleBackClick
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.wrapper{
  padding: 0 .18rem;
}
.search{
  margin: .14rem 0 .04rem 0;
  display: flex;
  &_back{
    .icon{
      fill:#b6b6b6
    }
    width: .3rem;
    font-size: .24rem;
  }
  &_content{
    display: flex;
    flex:1;
    background: #f5f5f5;
    border-radius: .16rem;
    &_icon{
      width: .44rem;
      text-align: center;
      font-size: .2rem;
      line-height: .32rem;
      .icon{
        fill:#b7b7b7
      }
    }
    &_input{
      height: .32rem;
      border: none;
      outline: none;
      background: none;
      display: block;
      width: 100%;
      padding-right:.2rem;
      color: #333;
      font-size: .14rem;
      &::placeholder{
        color: #333;
      }
    }
  }
}
</style>

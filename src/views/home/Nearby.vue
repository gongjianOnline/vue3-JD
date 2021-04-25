<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <ShopInfo v-for="item in nearbyList" :key="item._id" :item="item" :hideBorder="true"/>
  </div>
</template>
<script>
import { get } from '../../utils/request.js'
import { ref } from 'vue'
import ShopInfo from '../../components/shopInfo'
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const response = await get('/api/shop/hot-list')
    if (response?.data.errno === 0 && response?.data?.data?.length) {
      nearbyList.value = response.data.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return {
      nearbyList
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-fontColor;
    font-weight: normal;
  }
  &_item {
    display: flex;
    padding-top: 0.12rem;
    &_img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
  }
  &_content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
    &_title {
      font-size: 0.16rem;
      line-height: 0.22rem;
      color: $content-fontColor;
    }
    &_tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontColor;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>

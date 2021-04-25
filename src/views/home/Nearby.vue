<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <router-link
    v-for="item in nearbyList"
    :key="item._id"
    :to="`/shop/${item._id}`">
      <ShopInfo :item="item" :hideBorder="true"/>
    </router-link>
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
  a{
    text-decoration: none;
  }
}
</style>

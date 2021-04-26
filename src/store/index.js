import { createStore } from 'vuex'

export default createStore({
  state: {
    /**
       * 店铺id:{
       *    商品id:{
       *      title:'xxx',
       *      cont:0,
       *      ....
       *    }
       * }
    */
    cartList: {}
  },
  mutations: {
    addItemToCart (state, payload) {
      console.log(123)
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
      console.log(state.cartList)
    }
  },
  actions: {
  },
  modules: {
  }
})

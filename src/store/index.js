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
    // 购物车
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count = product.count + num
      if (product.count < 0) {
        product.count = 0
      }
      if (payload.num > 0) {
        product.check = true
      }
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    },
    // 复选框
    chngecartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId][productId]
      product.check = !product.check
    },
    // 清除购物车
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    }
  },
  actions: {
  },
  modules: {
  }
})

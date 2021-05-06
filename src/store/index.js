import { createStore } from 'vuex'

export default createStore({
  state: {
    /**
     * shopId:{
     *  shopName:"沃尔玛",
     *  productList:{
     *    productId:{
     *      _id: "1",
     *      name: "番茄250/分",
     *      imgUrl: 'http/xxxx/xxx/xxx.png',
     *      sales: 10,
     *      price: 33.6,
     *      oldPrice: 39.6,
     *      count: 2
     *    }
     *  }
     * }
     */
    cartList: {}
  },
  mutations: {
    // 购物车
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      if (!shopInfo) { shopInfo = {} }
      let product = shopInfo.productList[productId]
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
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
    },
    // 复选框
    chngecartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
    },
    // 清除购物车
    cleanCartProducts (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
    // 全选
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        /* eslint-disable */
        for(let key in products) {
          const product = products[key]
          product.check = true
        }
        /* eslint-enable */
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

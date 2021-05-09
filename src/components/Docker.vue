<template>
  <div class="docker">
    <span v-for="(item,index) in dockerList" :key="index"
    class="docker__item">
      <router-link :to="item.to">
        <div>
          <svg class="icon" aria-hidden="true" :class="{'docker__item_active':index === currentIndex? true : false}">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <div class="docker_title" :class="{'docker__item_active':index === currentIndex? true : false}">{{item.text}}</div>
      </router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '#iconhome', text: '首页', to: { name: 'Home' } },
      { icon: '#iconshopping-cart', text: '购物车', to: { name: 'CartList' } },
      { icon: '#icondingdan', text: '订单', to: { name: 'OrderList' } },
      { icon: '#iconmy', text: '我的', to: { name: 'MyInfo' } }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/virables.scss";
@import "../style/mixins.scss";
.docker {
  background: #fff;
  z-index: 1;
  color: $content-fontColor;
  box-sizing: border-box;
  padding: 0 0.18rem;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid $content-bgColor;
  display: flex;
  &__item {
    flex: 1;
    text-align: center;
    .icon {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    a{
      color: $content-fontColor;
      text-decoration: none;
    }
    &_title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    &_active {
      color: #1fa4fc;
      fill:#1fa4fc;
    }
  }
}
</style>

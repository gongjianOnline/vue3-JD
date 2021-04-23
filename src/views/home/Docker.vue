<template>
  <div class="docker">
    <span v-for="(item,index) in dockerList" :key="index"
    class="docker__item"
    :class="{'docker__item--active':index === 0? true : false}">
      <div>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
      </div>
      <div class="docker_title">{{item.text}}</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '#iconhome', text: '首页' },
      { icon: '#iconshopping-cart', text: '购物车' },
      { icon: '#icondingdan', text: '订单' },
      { icon: '#iconmy', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.docker {
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
    &_title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    &--active {
      color: #1fa4fc;
      fill:#1fa4fc;
    }
  }
}
</style>

<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhome"></use>
        </svg>
      </div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker__item">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconshopping-cart"></use>
        </svg>
      </div>
      <div class="docker_title">购物车</div>
    </span>
    <span class="docker__item">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icondingdan"></use>
        </svg>
      </div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker__item">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconmy"></use>
        </svg>
      </div>
      <div class="docker_title">我的</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Docker'
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
    }
  }
}
</style>

<template>
  <div class="cart">
    <div class="check">
      <div class="check_icon">
        <img class="check_icon_img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check_icon_tag">1</div>
      </div>
      <div class="check_info">
        总计: <span class="check_info_price">&yen; 123</span>
      </div>
      <div class="check_btn">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.cart{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check{
  display: flex;
  box-sizing: border-box;
  height: .49rem;
  border-top: .01rem solid #f1f1f1;
  line-height: 0.49rem;
  &_icon{
    width:.84rem;
    position: relative;
    &_img{
      width: .28rem;
      height: .26rem;
      display: block;
      margin: .12rem auto;
    }
    &_tag{
      position: absolute;
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: .2rem;
      background: #e93f3f;
      border-radius: 50%;
      font-size: .12rem;
      line-height: .2rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
    }
  }
  &_info{
    flex:1;
    line-height: .49rem;
    color: #333;
    font-size: .12rem;
    &_price{
      color: #e93b3b;
      font-size: .18rem;
    }
  }
  &_btn{
    width: .98rem;
    line-height: .49rem;
    background-color: #4fb0f9;
    color: #fff;
    font-size: .14rem;
    text-align: center;
  }
}
</style>

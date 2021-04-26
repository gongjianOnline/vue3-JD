<template>
  <div class="content">
    <div class="category">
      <div class="category_item category_item-active">全部商品</div>
      <div class="category_item">秒杀</div>
      <div class="category_item">新鲜水果</div>
      <div class="category_item">生鲜食品</div>
      <div class="category_item">时令蔬菜</div>
      <div class="category_item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product_item">
        <img class="product_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="product_item_detail">
          <h4 class="product_item_title">番茄250g/份</h4>
          <p class="product_item_sales">月售10件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span> 33.6
            <span class="product_item_origin">66.6</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus">-</span>
          0
          <span class="product_number_add">+</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category{
  width: .76rem;
  background-color: #f5f5f5;
  height: 100%;
  overflow: scroll;
  &_item{
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    &-active{
      background-color: #fff;
    }
  }
}
.product{
  flex:1;
  overflow: scroll;
  &_item{
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    position: relative;
    &_detail{
      overflow: hidden;
    }
    &_img{
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &_title{
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      margin: 0;
      @include ellipsis;
    }
    &_sales{
      margin: .06rem 0;
      line-height: .16rem;
      font-size: .12rem;
      color:#333
    }
    &_price{
      margin:0;
      line-height: .2rem;
      font-size: .14rem;
      color:#E93b3b
    }
    &_yen{
      font-size: .12rem;
    }
    &_origin{
      line-height: .2rem;
      font-size: .12rem;
      color:#999;
      text-decoration: line-through;
      margin-left: .06rem;
    }
    .product_number{
      position:absolute;
      bottom: .12rem;
      right: 0rem;
      &_minus,&_add{
        width: .2rem;
        height: .2rem;
        display: inline-block;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
        line-height: .16rem;
        border: 1px solid #666;
      }
      &_minus{
        margin-right: .05rem;
      }
      &_add{
        background-color: #0091ff;
        color: #fff;
        border-color: #fff;
        margin-left: .05rem;
      }
    }
  }
}
</style>

<template>
  <div class="shop">
    <img class="shop_img" :src="item.imgUrl" alt=""/>
    <div class="shop_content" :class="{'shop_content-border':hideBorder?true:false}">
      <div class="shop_content_title">{{item.name}}</div>
      <div class="shop_content_tags">
        <span class="shop_content_tag">月售: {{item.sales}}</span>
        <span class="shop_content_tag">起送: {{item.expressLimit}}</span>
        <span class="shop_content_tag">基础运费: {{item.expressPrice}}</span>
      </div>
      <p class="shop_content_highlight">
        {{item.slogan}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>
<style lang="scss" scoped>
@import "../style/virables.scss";
@import "../style/mixins.scss";
.shop {
  display: flex;
  padding-top: 0.12rem;
  &_img {
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.16rem;
  }
  &_content {
    flex: 1;
    padding-bottom: 0.12rem;
    &-border{
      border-bottom: 1px solid $content-bgColor;
    }
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

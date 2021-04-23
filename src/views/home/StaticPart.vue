<template>
  <div class="position">
    <svg class="icon position_icon" aria-hidden="true">
      <use xlink:href="#iconposition"></use>
    </svg>
    南开大学现代远程教育学院计算机空间实验室
    <svg class="icon position_notice" aria-hidden="true">
      <use xlink:href="#iconbell"></use>
    </svg>
  </div>
  <div class="search">
    <svg class="icon iconfont" aria-hidden="true">
      <use xlink:href="#iconseachx"></use>
    </svg>
    <span class="search_text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img
      class="banner_image"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt=""
    />
  </div>
  <div class="icons">
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt=""
      />
      <p class="icons_item_desc">超市便利</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        alt=""
      />
      <p class="icons_item_desc">菜市场</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        alt=""
      />
      <p class="icons_item_desc">水果店</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        alt=""
      />
      <p class="icons_item_desc">鲜花绿植</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        alt=""
      />
      <p class="icons_item_desc">医药健康</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/家居.png"
        alt=""
      />
      <p class="icons_item_desc">家居时尚</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        alt=""
      />
      <p class="icons_item_desc">烘焙蛋糕</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/签到.png"
        alt=""
      />
      <p class="icons_item_desc">签到</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        alt=""
      />
      <p class="icons_item_desc">大牌免运</p>
    </div>
    <div class="icons_item">
      <img
        class="icons_item_img"
        src="http://www.dell-lee.com/imgs/vue3/红包.png"
        alt=""
      />
      <p class="icons_item_desc">红包喜供</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPatr'
}
</script>

<style lang="scss" scoped>
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.position {
  color: $content-fontColor;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  &_icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  &_notice {
    position: absolute;
    top: 0.17rem;
    right: 0.24rem;
    font-size: 0.2rem;
  }
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  .iconfont {
    display: inline-block;
    font-size: 0.2rem;
    position: relative;
    top: 0.02rem;
    padding: 0 0.12rem 0 0.16rem;
  }
  &_text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &_image {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &_item {
    width: 20%;
    &_img {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      transform: translateX(25%);
    }
    &_desc {
      color: $content-fontColor;
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>

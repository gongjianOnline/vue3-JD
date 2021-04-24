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
    <div class="icons_item" v-for="(item) in iconList" :key="item.img">
      <img
        class="icons_item_img"
        :src="'http://www.dell-lee.com/imgs/vue3/'+item.img+'.png'"
        alt=""
      />
      <p class="icons_item_desc">{{item.desc}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPatr',
  setup () {
    const iconList = [
      { img: '超市', desc: '超市便利' },
      { img: '菜市场', desc: '菜市场' },
      { img: '水果店', desc: '水果店' },
      { img: '鲜花', desc: '鲜花绿植' },
      { img: '医药健康', desc: '医药健康' },
      { img: '家居', desc: '家居时尚' },
      { img: '蛋糕', desc: '烘焙蛋糕' },
      { img: '签到', desc: '签到' },
      { img: '大牌免运', desc: '大牌免运' },
      { img: '红包', desc: '红包喜供' }
    ]
    return {
      iconList
    }
  }
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
      transform: translateX(20%);
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

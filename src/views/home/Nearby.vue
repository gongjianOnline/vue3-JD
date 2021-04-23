<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby_item"
    v-for="(item) in nearbyList"
    :key="item.id">
      <img
        class="nearby_item_img"
        :src="item.imgUrl"
        alt=""
      />
      <div class="nearby_content">
        <div class="nearby_content_title">{{item.title}}</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag"
          v-for="(tagItem,tagIndex) in item.tages"
          :key="tagIndex">{{tagItem}}</span>
        </div>
        <p class="nearby_content_highlight">
          {{item.desc}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      { id: 1, imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tages: ['月售1万+', '起送￥0', '基础运费￥5'], desc: 'VIP尊享满89元减4元运费劵(每月3张)' },
      { id: 2, imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tages: ['月售1万+', '起送￥0', '基础运费￥5'], desc: 'VIP尊享满89元减4元运费劵(每月3张)' },
      { id: 2, imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png', title: '沃尔玛', tages: ['月售1万+', '起送￥0', '基础运费￥5'], desc: 'VIP尊享满89元减4元运费劵(每月3张)' }
    ]
    return {
      nearbyList
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    color: $content-fontColor;
    font-weight: normal;
  }
  &_item {
    display: flex;
    padding-top: 0.12rem;
    &_img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
  }
  &_content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-bgColor;
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

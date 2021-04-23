<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div class="nearby_item">
      <img
        class="nearby_item_img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
      />
      <div class="nearby_content">
        <div class="nearby_content_title">沃尔玛</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
        </div>
        <p class="nearby_content_highlight">
          VIP至尊满89元减4元运费劵(每月3张)
        </p>
      </div>
    </div>
    <div class="nearby_item">
      <img
        class="nearby_item_img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
      />
      <div class="nearby_content">
        <div class="nearby_content_title">沃尔玛</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
        </div>
        <p class="nearby_content_highlight">
          VIP至尊满89元减4元运费劵(每月3张)
        </p>
      </div>
    </div>
    <div class="nearby_item">
      <img
        class="nearby_item_img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
      />
      <div class="nearby_content">
        <div class="nearby_content_title">沃尔玛</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
        </div>
        <p class="nearby_content_highlight">
          VIP至尊满89元减4元运费劵(每月3张)
        </p>
      </div>
    </div>
    <div class="nearby_item">
      <img
        class="nearby_item_img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
      />
      <div class="nearby_content">
        <div class="nearby_content_title">沃尔玛</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
          <span class="nearby_content_tag">月售1万+</span>
        </div>
        <p class="nearby_content_highlight">
          VIP至尊满89元减4元运费劵(每月3张)
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nearby'
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

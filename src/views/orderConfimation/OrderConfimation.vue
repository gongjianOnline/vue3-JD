<template>
  <div class="wrapper">
    <div class="top">
      <div class="top_header">
        <svg class="icon iconback" aria-hidden="true">
          <use xlink:href="#iconback"></use>
        </svg>
        确认订单
      </div>
      <div class="top_receiver">
        <div class="top_receiver_title">收货地址</div>
        <div class="top_receiver_address">南开大学远程教育学院</div>
        <div class="top_receiver_info">
          <span class="top_receiver_info_name">小明</span>
          <span class="top_receiver_info_name">15031616161</span>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconback-right"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderConfirmation'
}
</script>
<style lang="scss" scoped>
.wrapper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
}
.top{
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg,rgba(0,145,255,0.0) 4%,#0091FF 50%);
  background-repeat: no-repeat;
  &_header{
    position: relative;
    padding-top: 0.26rem;
    line-height: .24rem;
    color: #fff;
    text-align: center;
    font-size: .16rem;
    .iconback{
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &_receiver{
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius:.04rem;
    &_title{
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: #333;
      line-height: .22rem;
    }
    &_address{
      padding: 0 .4rem 0 .16rem;
      color:#333;
      font-size: .14rem;
      line-height: .2rem
    }
    &_info{
      padding:.06rem 0 0 .16rem;
      &_name{
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color:#666;
      }
    }
    .right{
      display: inline-block;
      position: absolute;
      right: 0.16rem;
      top: .50rem;
      transform: translateY(-0.025rem);
      color:#666;
      font-size: .16rem;
    }
  }
}
</style>

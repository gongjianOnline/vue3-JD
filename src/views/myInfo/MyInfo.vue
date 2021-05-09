<template>
  <div class="wrapper">
    <div class="header">
      <div class="header_info">
        <div class="header_info_user">龚箭</div>
        <div class="header_info_id">ID: gongjian00001</div>
      </div>
      <img src="https://z3.ax1x.com/2021/05/09/gYECa6.jpg" alt="" class="header_avatar">
    </div>
    <div class="list">
      <div class="list_item">
        <div class="list_item_icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconposition"></use>
          </svg>
        </div>
        <div class="list_item_test">我的地址</div>
        <div class="list_item_arrow">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconback"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="logout" @click="outBtn">退出登录</div>
  </div>
  <Docker :currentIndex="3"/>
</template>
<script>
import { useRouter } from 'vue-router'
import Docker from '../../components/Docker'
export default {
  name: 'MyInfo',
  components: { Docker },
  setup () {
    const router = useRouter()
    const outBtn = () => {
      localStorage.removeItem('isLogin')
      router.replace({ name: 'Login' })
    }
    return { outBtn }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: #f8f8f8;
}
.header{
  position: relative;
  height: 1.5rem;
  background-image: linear-gradient(239deg,#3a6ff3,#50c7fb);
  padding-top: .4rem;
  &_info{
    margin: .3rem .18rem 0 .18rem;
    padding-top: .46rem;
    height: .66rem;
    background: #fff;
    border-radius: .08rem;
    &_user{
      font-size: .24rem;
      color: #262628;
      text-align: center;
      line-height: .36rem;
    }
    &_id{
      margin-top: .04rem;
      font-size: .14rem;
      color: #c1c0c9;
      text-align: center;
    }
  }
  &_avatar{
    position: absolute;
    left: 50%;
    top: .2rem;
    transform: translateX(-50%);
    width: .94rem;
    height: .94rem;
    border-radius: 50%;
  }
}
.list{
  margin: .16rem .18rem 0 .18rem;
  background: #fff;
  box-shadow: 0 0.08rem 0.16rem 0 rgb(0 0 0 / 8%);
  border-radius: .08rem;
  &_item{
    display: flex;
    padding: .2rem;
    line-height: .22rem;
    font-size: .14rem;
    color: #262626;
    &_icon{
      margin-right: .12rem;
      width: .22rem;
      height: .22rem;
      background: #32c5ff;
      border-radius: .08rem;
      text-align: center;
      font-weight: 700;
      color: #fff;
    }
    &_test{
      flex: 1;
    }
    &_arrow{
      width: .2rem;
      transform: rotate(180deg);
      font-weight: 700;
      color: #c2c4ca;
    }
  }
}
.logout{
  margin: .18rem;
  line-height: .32rem;
  background: #0091ff;
  color: #fff;
  text-align: center;
  border-radius: .04rem;
}
</style>

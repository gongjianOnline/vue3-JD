<template>
  <div class="wrapper">
    <img class="wrapper_img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper_input">
      <input
      type="text"
      class="wrapper_input_content"
      placeholder="请输入手机号"
      v-model="username">
    </div>
    <div class="wrapper_input">
      <input type="password"
      class="wrapper_input_content"
      placeholder="请输入密码"
      autocomplete="new-password"
      v-model="password">
    </div>
    <div class="wrapper_login-button" @click="handleLogin">登录</div>
    <div class="wrapper_login-link" @click="handleRegisterClick">立即注册</div>
  </div>
  <Toast v-if="showToast" :message="toastMessage"/>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useLoginEffect = (showToastFun) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const response = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (response?.data?.errno === 0) {
        localStorage.isLogin = true
        showToastFun('正在验证用户信息...')
        setTimeout(() => {
          router.push({ name: 'Home' })
        }, 3000)
      } else {
        showToastFun('登录失败')
      }
    } catch (err) {
      showToastFun('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'register' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const { showToast, toastMessage, showToastFun } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToastFun)
    const { handleRegisterClick } = useRegisterEffect()
    return {
      username,
      password,
      showToast,
      toastMessage,
      handleLogin,
      handleRegisterClick
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right:0;
  transform: translateY(-50%);
  &_img{
    width: .66rem;
    height: .66rem;
    display: block;
    margin: 0 auto .4rem auto;
  }
  &_input{
    background: #f9f9f9f9;
    margin: 0 .4rem  .16rem .4rem;
    height: .48rem;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    padding:  0 .16rem;
    box-sizing: border-box;
    &_content{
      width: 100%;
      border: none;
      outline: none;
      height: .48rem;
      background: none;
      font-size: .16rem;
      color: rgba(0,0,0,0.50);
      &::placeholder{
        color: rgba(0,0,0,0.50);
      }
    }
  }
  &_login-button{
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color:#fff;
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
  }
  &_login-link{
    font-size: .14rem;
    color:rgba(0,0,0,0.50);
    text-align: center;
  }
}
</style>

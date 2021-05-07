<template>
  <div class="wrapper">
    <img
      class="wrapper_img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <div class="wrapper_input">
      <input
        type="text"
        class="wrapper_input_content"
        placeholder="请输入手机号"
        v-model="username"
      />
    </div>
    <div class="wrapper_input">
      <input
        type="password"
        class="wrapper_input_content"
        placeholder="请输入密码"
        autocomplete="new-password"
        v-model="password"
      />
    </div>
    <div class="wrapper_input">
      <input
        type="password"
        class="wrapper_input_content"
        placeholder="确认密码"
        autocomplete="new-password"
        v-model="passwordOk"
      />
    </div>
    <div class="wrapper_register-button" @click="handleRegisterClick">注册</div>
    <div class="wrapper_register-link" @click="handleLoginClick">
      已有账号立即登录
    </div>
  </div>
  <Toast v-if="showToast" :message="toastMessage"/>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import Toast, { useToastEffect } from '../../components/Toast'
// 注册表单相关逻辑
const useRegisterEffect = (showToastFun) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    passwordOk: ''
  })
  const {
    username,
    password,
    passwordOk
  } = toRefs(data)
  const handleRegisterClick = async () => {
    try {
      const response = await post('/api/user/register', {
        username: username,
        password: password,
        passwordOk: passwordOk
      })
      if (response?.data?.errno === 0) {
        showToastFun('注册成功，自动跳转到登录页')
        setTimeout(() => {
          router.push({ name: 'Login' })
        }, 3000)
      } else {
        showToastFun('注册失败')
      }
    } catch (err) {
      showToastFun('请求失败')
    }
  }
  return {
    username,
    password,
    passwordOk,
    handleRegisterClick
  }
}
// 已有账号相关逻辑
const userLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { showToast, toastMessage, showToastFun } = useToastEffect()
    const {
      username,
      password,
      passwordOk,
      handleRegisterClick
    } = useRegisterEffect(showToastFun)
    const { handleLoginClick } = userLoginEffect()
    return {
      username,
      password,
      passwordOk,
      showToast,
      toastMessage,
      handleRegisterClick,
      handleLoginClick
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &_input {
    background: #f9f9f9f9;
    margin: 0 0.4rem 0.16rem 0.4rem;
    height: 0.48rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 0 0.16rem;
    box-sizing: border-box;
    &_content {
      width: 100%;
      border: none;
      outline: none;
      height: 0.48rem;
      background: none;
      font-size: 0.16rem;
      color: rgba(0, 0, 0, 0.5);
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  &_register-button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
  }
  &_register-link {
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
}
</style>

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
      />
    </div>
    <div class="wrapper_input">
      <input
        type="password"
        class="wrapper_input_content"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper_input">
      <input
        type="password"
        class="wrapper_input_content"
        placeholder="确认密码"
      />
    </div>
    <div class="wrapper_register-button">注册</div>
    <div class="wrapper_register-link" @click="handleLoginClick">
      已有账号立即登录
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }
    return {
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

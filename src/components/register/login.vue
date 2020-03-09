<template>
  <div class="loginContainer">
    <div class="appName">慧吧</div>
    <div class="register">还没有账号？<router-link to="/register">点击注册</router-link></div>
    <div class="tel">
      <input type="number" class="telNumber" placeholder="请输入手机号码" />
    </div>
    <div class="tel">
      <input type="number" class="telNumber" placeholder="请输入密码" />
    </div>
    <div class="anoSelWrap">
      <router-link to="/quick" class="suan">短信快捷登录</router-link>
      <router-link to="/find" class="suan">忘记密码</router-link>
    </div>
    <router-link tag="div" to="/home" class="login">登录</router-link>
    <router-link tag="div" to="/home" class="suiian">随便看看</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var footer = document.getElementsByClassName("footer");
    footer[0].style.display = "none";
  }
};
</script>
<style>
.loginContainer {
}
.loginContainer .appName {
  font-size: 34px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 15px;
  margin-top: 80px;
}
.loginContainer .register {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(150, 150, 153, 1);
  margin-top: 20px;
  margin-left: 15px;
}
.loginContainer .register span {
  color: rgba(66, 112, 235, 1);
}
.loginContainer .tel {
  width: 93%;
  margin: auto;
  height: 50px;
  background: rgba(51, 51, 51, 0.05);
  border-radius: 25px;
  margin-top: 38px;
}
.loginContainer .tel .telNumber {
  border: 1px solid #e6e3e3;
  color: black;
  background: #f0f0f5;
}
.loginContainer .tel input::placeholder {
  font-size: 14px;
  font-weight: 600;
  color: rgba(161, 169, 179, 0.5);
}
.loginContainer .anoSelWrap {
  display: flex;
  width: 92%;
  margin: auto;
  justify-content: space-between;
  margin-top: 18px;
}
.loginContainer .anoSelWrap .suan {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(96, 126, 255, 1);
}
.loginContainer .login {
  width: 93%;
  margin: auto;
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  border-radius: 28px;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 40px;
}
.loginContainer .suiian{
    font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(66,112,235,1);
text-align: center;
    margin-top: 57px;
}
</style>
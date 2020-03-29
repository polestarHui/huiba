<template>
    <div class="quickContainer">
        <img
      class="fork"
      src="../../images/common/fork.png"
      alt="取消"
      @click="returnB"
    />
    <div class="title">快捷登录</div>
    <div class="telWrap teshu">
      <div class="telName">邮箱</div>
      <input class="teshuGet1" type="number" placeholder="请输入邮箱" />
    </div>
    <div class="telWrap">
      <div class="telName">验证码</div>
      <input type="number" placeholder="请输入验证码" />
      <button type="button" name="button" class="get getCode">
        获取验证码
      </button>
    </div>
    <router-link tag="div" class="registerBtn" to="/home">登录</router-link>
    </div>
</template>
<script>
export default {
    methods:{
        returnB(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
    .quickContainer {
}
.quickContainer .fork {
  width: 22px;
  height: 22px;
  position: absolute;
  right: 36px;
  top: 47px;
}
.quickContainer .title {
  font-size: 34px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 9.5%;
  margin-top: 80px;
}
.quickContainer .telWrap {
  width: 81%;
  margin: auto;
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  height: 50px;
}
.quickContainer .teshu {
  margin-top: 60px;
}
.quickContainer .telWrap .telName {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
  width: 90px;
}
.quickContainer .telWrap input {
  margin-top: 10.5px;
  margin-bottom: 0;
  margin-left: 15px;
  background: transparent;
  border: none;
  padding: 0;
}
.quickContainer .telWrap .teshuGet1 {
  margin-left: -13px;
}
.quickContainer .telWrap .teshuGet2 {
  margin-left: -8px;
}
.quickContainer .telWrap input::placeholder {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(199, 199, 204, 1);
}
.quickContainer .telWrap .eye {
  width: 22px;
  height: 22px;
  margin-top: 18px;
}
.quickContainer .telWrap .get {
  width: 118px;
  text-align: right;
  /* line-height: 91px; */
  font-size: 14px;
  height: 35px;
  background: #f0f2f5;
  border: none;
  margin-top: 11px;
}
.quickContainer .registerBtn {
  width: 80%;
  margin: auto;
  height: 45px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  border-radius: 25px;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 105px;
}
</style>
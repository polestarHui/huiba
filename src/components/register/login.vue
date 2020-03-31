<template>
  <div class="loginContainer">
    <div class="appName">慧吧</div>
    <div class="register">
      还没有账号？<router-link to="/register">点击注册</router-link>
    </div>
    <div class="tel">
      <input
        id="mailContent"
        type="text"
        class="telNumber"
        placeholder="请输入邮箱"
      />
    </div>
    <div class="tel">
      <input
        id="pawswoed"
        type="password"
        class="telNumber"
        placeholder="请输入密码"
      />
    </div>
    <div class="anoSelWrap">
      <router-link to="/quick" class="suan">邮箱快捷登录</router-link>
      <router-link to="/find" class="suan">忘记密码</router-link>
    </div>
    <!-- <router-link tag="div" to="/home" class="login" @click="login"
      >登录</router-link
    > -->
    <el-button class="login" :plain="true" @click="loginHome">登录</el-button>
    <router-link tag="div" to="/home" class="suiian">随便看看</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {

  },
  mounted() {
    var footer = document.getElementsByClassName("footer");
    footer[0].style.display = "none";
  },
  methods: {
    // 登录
    loginHome() {
      var mail = document.getElementById("mailContent").value;
      // console.log(mail);
      var pas = document.getElementById("pawswoed").value;
      // console.log(pas.length);
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (pas == "" || mail == "") {
        this.$message.error("请填写完整的信息");
      } else {
        if (pas.length <= 5) {
          this.$message.error("密码为6~18位");
        } else {
          if (reg.test(mail)) {
            this.$message("登录成功");
            // 跳转到首页
            this.$router.push({
              name:'home'
            });
            var footer = document.getElementsByClassName("footer");
            footer[0].style.display = "block";
          } else {
            this.$message.error("请输入正确的邮箱格式");
          }
        }
      }
    }

    // open1() {
    //     this.$message('这是一条消息提示');
    //   },
    //   open2() {
    //     this.$message({
    //       message: '恭喜你，这是一条成功消息',
    //       type: 'success'
    //     });
    //   },

    //   open3() {
    //     this.$message({
    //       message: '警告哦，这是一条警告消息',
    //       type: 'warning'
    //     });
    //   },

    //   open4() {
    //     this.$message.error('错了哦，这是一条错误消息');
    //   }
  }
};
</script>
<style scoped>
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
  /* margin: auto; */
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  border-radius: 28px;
  text-align: center;
  /* line-height: 30px; */
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 40px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.loginContainer .suiian {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(66, 112, 235, 1);
  text-align: center;
  margin-top: 57px;
}
</style>
<template>
  <div class="registerContainer">
    <img
      class="fork"
      src="../../images/common/fork.png"
      alt="取消"
      @click="returnB"
    />
    <div class="title">注册</div>
    <div class="telWrap teshu">
      <div class="telName">邮箱</div>
      <input class="teshuGet1" type="text" id="mail" placeholder="请输入邮箱" />
    </div>
    <div class="telWrap">
      <div class="telName">验证码</div>
      <input type="number" id="yancode" placeholder="请输入验证码" />
      <button
        type="button"
        @click="getCode"
        name="button"
        class="get getCode"
        ref="getCode"
      >
        获取验证码
      </button>
    </div>
    <div class="telWrap">
      <div class="telName">密码</div>
      <input
        id="myPaw"
        class="teshuGet2"
        type="password"
        ref="teshuGet2"
        placeholder="请设置密码"
      />
      <img
        v-if="isEye"
        @click="changePas"
        class="eye"
        src="../../images/common/eyeF.png"
        alt="小眼睛"
      />
      <img
        v-else
        class="eye"
        @click="changePas"
        src="../../images/common/eye.png"
        alt="小眼睛"
      />
    </div>
    <!-- <router-link tag="div" class="registerBtn" to="/home">注册</router-link> -->
    <el-button :plain="true" class="registerBtn" @click="goHome"
      >注册</el-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEye: true
    };
  },
  created() {
    var footer = document.getElementsByClassName("footer");
    footer[0].style.display = "none";
  },
  methods: {
    returnB() {
      this.$router.go(-1);
    },
    // 小眼睛
    changePas() {
      this.isEye = !this.isEye;
      if (this.isEye == true) {
        // console.log("看不见密码");
        this.$refs.teshuGet2.setAttribute("type", "password");
      } else {
        // console.log("可以看见")
        this.$refs.teshuGet2.setAttribute("type", "number");
      }
    },
    // 获取验证码
    getCode() {
      // var getCode = document.getElementsByClassName('getCode');
      // 判断邮箱是否合法
      var mail = document.getElementById("mail").value;
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(mail)) {
        var count;
        var getCode = this.$refs.getCode;

        // console.log(getCode);
        // console.log(getCode.dataset.numCount);
        getCode.setAttribute("disabled", true);
        count = 60;
        var countDown = setInterval(function() {
          if (count === 0) {
            // getCode.text("重新发送").removeAttr("disabled");
            getCode.setAttribute("disabled", false);
            getCode.innerHTML = "重新发送";
            getCode.style.color = "rgba(21, 125, 232, 1)";
            clearInterval(countDown);
          } else {
            getCode.style.color = "rgba(21, 125, 232, 1)";
            getCode.innerHTML = count + "s";
            // getCode.text('重新获取(' + count + ')');
          }
          count--;
        }, 1000);
      } else {
        alert('请输入正确的邮箱格式');
      }
    },
    //注册
    goHome() {
      var mail = document.getElementById("mail").value;
      var code = document.getElementById("yancode").value;
      var pas = document.getElementById("myPaw").value;
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (mail == "" || code == "" || pas == "") {
        this.$message.error("请填写完整的信息");
      } else {
        if (reg.test(mail)) {
          if (pas.length <= 5) {
            this.$message.error("密码为6~18位");
          } else {
            this.$message("注册成功");
            // 跳转到首页
            this.$router.push({
              name: "home",
              params: {
                id: "20180822",
                name: "query"
              }
            });
             var footer = document.getElementsByClassName("footer");
            footer[0].style.display = "block";
            // 接收参数的时候使用
            // this.id = this.$route.params.id ;
            // this.name = this.$route.params.name ;
            //路由
            // {
            // path: '/second/:id/:name',
            // name: 'second',
            // component: () => import('@/view/second')
            // }
          }
        } else {
          this.$message.error("请输入正确的邮箱格式");
        }
      }
    }
  }
};
</script>
<style>
.registerContainer {
}
.registerContainer .fork {
  width: 22px;
  height: 22px;
  position: absolute;
  right: 36px;
  top: 47px;
}
.registerContainer .title {
  font-size: 34px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  margin-left: 9.5%;
  margin-top: 80px;
}
.registerContainer .telWrap {
  width: 81%;
  margin: auto;
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  height: 50px;
}
.registerContainer .teshu {
  margin-top: 60px;
}
.registerContainer .telWrap .telName {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 60px;
  width: 90px;
}
.registerContainer .telWrap input {
  margin-top: 10.5px;
  margin-bottom: 0;
  margin-left: 15px;
  background: transparent;
  border: none;
  padding: 0;
}
.registerContainer .telWrap .teshuGet1 {
  margin-left: -13px;
}
.registerContainer .telWrap .teshuGet2 {
  margin-left: -8px;
}
.registerContainer .telWrap input::placeholder {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(199, 199, 204, 1);
}
.registerContainer .telWrap .eye {
  width: 22px;
  height: 22px;
  margin-top: 18px;
}
.registerContainer .telWrap .get {
  width: 118px;
  text-align: right;
  /* line-height: 91px; */
  font-size: 14px;
  height: 35px;
  background: #f0f2f5;
  border: none;
  margin-top: 11px;
}
.registerContainer .registerBtn {
  width: 80%;
  /* margin: auto; */
  height: 45px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  border-radius: 25px;
  text-align: center;
  /* line-height: 45px; */
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 105px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
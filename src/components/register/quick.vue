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
      <input class="teshuGet1" id="mail" type="text" placeholder="请输入邮箱" />
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
    <!-- <router-link tag="div" class="registerBtn" to="/home">登录</router-link> -->
    <el-button class="registerBtn" :plain="true" @click="loginHome">登录</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    returnB() {
      this.$router.go(-1);
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
            getCode.setAttribute("disabled", true);
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
        alert("请输入正确的邮箱格式");
      }
    },
    // 登录
    loginHome() {
       var mail = document.getElementById("mail").value;
       var code=document.getElementById('yancode').value;
       if(mail==''||code==''){
         this.$message.error("请填写完整的信息");
       }else{
         this.$message("登录成功");
        //  跳转到首页
        this.$router.push({
              name: "home",
              params: {
                id: "20180822",
                name: "query"
              }
            });
             var footer = document.getElementsByClassName("footer");
            footer[0].style.display = "block";
       }
    }
  }
};
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
<template>
  <div class="creatMybaContainer">
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">创建属于自己的吧</div>
      <div class="btn"></div>
    </div>
    <!-- 标题 -->
    <div class="contentTitle">
      <div class="number"><span>1</span>/2</div>
      <div class="title">基础信息</div>
    </div>
    <!-- 基本信息 -->
    <div class="details">
      <div class="phone">18337281301</div>
      <div class="caozao"></div>
    </div>
    <div class="details">
      <input type="text" placeholder="吧名" minlength="1" maxlength="14" />
      <div class="caozao">4/14</div>
    </div>
    <div class="jieshao">吧名支持中文、数字、英文、下划线</div>
    <div class="changeXie">
      <img src="../../images/common/selectF.png" alt="选择" />
      <div class="neirong">
        我已阅读并同意<router-link to="/xieyi" tag="span"
          >《建吧协议》</router-link
        >
      </div>
    </div>
    <!-- 按钮 -->
    <router-link to="/shiming" tag="div" class="nextBtn"
      >下一步 实名认证</router-link
    >
  </div>
</template>
<script>
export default {
  methods: {
    returnB() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.creatMybaContainer {
  background: #fff;
  padding-bottom: 300px;
}
.creatMybaContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.creatMybaContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.creatMybaContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.creatMybaContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 标题 */
.creatMybaContainer .contentTitle {
  width: 100%;
  padding: 0 3%;
  margin: auto;
  height: 100px;
}
.creatMybaContainer .contentTitle .number {
  font-size: 40px;
  font-family: fantasy;
  height: 65px;
  margin-top: 51px;
}
.creatMybaContainer .contentTitle .number span {
  font-size: 77px;
}
.creatMybaContainer .contentTitle .title {
  font-weight: bold;
  font-size: 28px;
  background: yellow;
  border-radius: 25px;
  width: 40%;
  text-align: center;
}
/* 基本信息 */
.creatMybaContainer .details {
  width: 93%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  border-bottom: 1px solid rgb(223, 223, 223);
}
.creatMybaContainer .details .phone {
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 19px;
}
.creatMybaContainer .details .caozao {
  font-size: 15px;
  color: #4b7fda;
  line-height: 40px;
}
.creatMybaContainer .details input {
  padding: 0;
  border: none;
  margin-bottom: 0px;
  font-size: 19px;
  font-weight: bold;
}
.creatMybaContainer .jieshao {
  width: 93%;
  margin: auto;
  margin-top: 10px;
  font-size: 12px;
  color: #c7c3c3;
}
.creatMybaContainer .changeXie {
  width: 93%;
  display: flex;
  margin: auto;
  margin-top: 100px;
}
.creatMybaContainer .changeXie img {
  width: 19px;
  height: 19px;
  margin-right: 14px;
}
.creatMybaContainer .changeXie .neirong {
  color: #818181;
}
.creatMybaContainer .changeXie .neirong span {
  color: #3a73df;
}
/* 按钮 */
.creatMybaContainer .nextBtn {
  width: 93%;
  margin: auto;
  text-align: center;
  height: 40px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  margin-top: 20px;
  line-height: 40px;
  color: #fff;
}
</style> 

<template>
  <div class="setPhoneContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">修改手机号</div>
      <div class="btn"></div>
    </div>
    <div class="blueUser">
        <div class="nowUser">更换手机号码后，下次登录可使用新手机账号登录。</div>
        <div class="afterUer">当前手机号：18337281301</div>
    </div>
    <div class="contentWrap">
        <div class="title">手机号码</div>
        <div class="inputWrap">
            <input type="text" placeholder="请输入您的手机号码">
        </div>
    </div>
    <div class="contentWrap">
        <div class="title">验证码</div>
        <div class="inputWrap">
            <input type="text" placeholder="请输入验证码">
            <div class="postBtn">获取验证码</div>
        </div>
    </div>
    <div class="certainBtn">确定</div>
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
<style>
.setPhoneContainer {
  background: #fff;
  padding-bottom: 300px;
}
.setPhoneContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.setPhoneContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.setPhoneContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.setPhoneContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 蓝色部分 */
.setPhoneContainer .blueUser{
        width: 100%;
    padding: 0 3%;
    height: 55px;
    background: #E8F2FE;
}
.setPhoneContainer .blueUser div{
    color: #547DD7;
    font-size: 12px;
}
.setPhoneContainer .blueUser .nowUser{
    padding-top: 8px;
}
.setPhoneContainer .contentWrap{
 width: 93%;
    margin: auto;
    height: 63px;
    border-bottom: 1px solid rgba(223, 223, 223, 0.5);
    margin-top: 15px;
}
.setPhoneContainer .contentWrap .title{
    font-weight: bold;
}
.setPhoneContainer .contentWrap .inputWrap{
           display: flex;
    justify-content: space-between;
}
.setPhoneContainer .contentWrap .inputWrap input{
    padding: 0;
    border: none;
}
.setPhoneContainer .contentWrap .inputWrap input::placeholder{
    color: rgba(193, 193, 193, 1);
}
.setPhoneContainer .contentWrap .inputWrap .postBtn{
        background: #147CE8;
    color: #fff;
    font-size: 13px;
    width: 38%;
    height: 33px;
    border-radius: 19px;
    line-height: 33px;
    text-align: center;
}
.setPhoneContainer .certainBtn{
        width: 94%;
    margin: auto;
    text-align: center;
    height: 40px;
    background: #137DE7;
    color: #fff;
    font-weight: bold;
    line-height: 40px;
    border-radius: 24px;
    margin-top: 50px;
}
</style>
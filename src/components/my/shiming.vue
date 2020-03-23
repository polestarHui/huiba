<template>
    <div class="shimingContainer">
        <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">创建属于自己的吧</div>
      <div class="btn"></div>
    </div>
     <!-- 标题 -->
    <div class="contentTitle">
        <div class="number"><span>2</span>/2</div>
        <div class="title">实名认证</div>
    </div>
    <!-- 信息填写部分 -->
    <div class="msgDetails">
        <input type="text" placeholder="请输入姓名" maxlength="20">
        <div class="number">0/20</div>
    </div>
    <div class="msgDetails">
        <input type="number" placeholder="请输入身份证号">
        <div class="number"></div>
    </div>
    <div class="miaoshu">一个身份证号只能建一个新吧哦</div>
    <div class="wanshanTitleWrap">
        <div class="title">请拍摄您的身份证照片</div>
        <div class="titContent">照片仅用于身份验证</div>
    </div>
    <!-- 添加身份证照片 -->
    <div class="shenWrap">
        <div class="every">
            <img src="../../images/common/shen1.png" alt="身份证照片">
            <div class="shenm">身份证正面照</div>
        </div>
        <div class="every rightPart">
            <img src="../../images/common/shen2.png" alt="身份证照片">
            <div class="shenm">身份证背面照</div>
        </div>
        <div class="every">
            <img src="../../images/common/shen3.png" alt="身份证照片">
            <div class="shenm">手持身份证正面照</div>
        </div>
    </div>
    <!-- 提交按钮 -->
    <div class="submitBtn">提交</div>
    </div>
</template>
<script>
export default {
    methods: {
        returnB(){
            this.$router.go(-2);
        }
    },
}
</script>
<style scoped>
    .shimingContainer {
  background: #fff;
  padding-bottom: 100px;
}
.shimingContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.shimingContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.shimingContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.shimingContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 标题 */
.shimingContainer .contentTitle{
    width: 100%;
    padding: 0 3%;
    margin: auto;
    height: 100px;
}
.shimingContainer .contentTitle .number{
font-size: 40px;
    font-family: fantasy;
    height: 65px;
    margin-top: 51px;
}
.shimingContainer .contentTitle .number span{
    font-size: 77px;
}
.shimingContainer .contentTitle .title{
    font-weight: bold;
    font-size: 28px;
    background: yellow;
    border-radius: 25px;
    width: 40%;
    text-align: center;
}
/* 信息填写部分 */
.shimingContainer .msgDetails{
    width: 93%;
    margin: auto;
    display: flex;
        margin-top: 25px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.shimingContainer .msgDetails input{
    padding: 0;
    border: none;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: bold;
}
.shimingContainer .msgDetails .number{
    color: #A5A5A5;
    line-height: 40px;
    font-size: 14px;
}
.shimingContainer .miaoshu{
    width: 93%;
    margin: auto;
    margin-top: 5px;
    font-size: 13px;
    color: #A4A4A4;
}
.shimingContainer .wanshanTitleWrap{
    width: 93%;
    margin: auto;
    margin-top: 30px;
}
.shimingContainer .wanshanTitleWrap .title{
font-weight: bold;
}
.shimingContainer .wanshanTitleWrap .titContent{
    font-size: 13px;
    color: #A4A4A4;
}
.shimingContainer .shenWrap{
    width: 93%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
}
.shimingContainer .shenWrap .every{
margin-top: 15px;
}
.shimingContainer .shenWrap .rightPart{
    margin-left: auto;
}
.shimingContainer .shenWrap .every img{
    width: 160px;
}
.shimingContainer .shenWrap .every .shenm{
    text-align: center;
    font-size: 13px;
    color: #A2A2A2;
}
.shimingContainer .submitBtn{
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
    margin-top: 30px;
    line-height: 40px;
    color: #fff;
}
</style>
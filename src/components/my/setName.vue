<template>
  <div class="setNameContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">编辑昵称</div>
      <div @click="returnB" class="btn">确认</div>
    </div>
    <!-- 内容 -->
    <div class="contenWrap">
        <input type="text" maxlength="10" minlength="2" placeholder="请编辑昵称">
    </div>
    <div class="details">2-10个字符，仅支持汉字、数字、字母</div>
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
.setNameContainer {
}
.setNameContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.setNameContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.setNameContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.setNameContainer .head .btn {
  width: max-content;
  height: 22px;
  margin-right: 15px;
  line-height: 44px;
}
/* 内容 */
.setNameContainer .contenWrap{
    width: 100%;
    height: 50px;
    background: #fff;
    margin-top: 10px;
}
.setNameContainer .contenWrap input{
    padding: 0;
    width: 90%;
    margin-left: 4%;
    border: none;
    margin-top: 5px;
}
.setNameContainer .details{
        width: 100%;
    height: 40px;
    font-size: 12px;
    color: #b5aeae;
    padding-left: 4%;
    line-height: 38px;
}
</style>
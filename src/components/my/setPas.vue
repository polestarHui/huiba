<template>
  <div class="setPasContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">修改密码</div>
      <div class="btn"></div>
    </div>
    <!-- 内容部分 -->
    <div class="yuanWrap">
        <div class="yuanTitle">原密码</div>
        <input type="text" placeholder="请输入原密码">
    </div>
    <div class="yuanWrap">
        <div class="yuanTitle">新密码</div>
        <input type="text" placeholder="请输入新密码">
    </div>
    <div class="yuanWrap">
        <div class="yuanTitle">确认密码</div>
        <input type="text" placeholder="请确认密码">
    </div>
    <div class="certaiBtn">
        确认修改
    </div>
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
.setPasContainer{
    background: #fff;
    padding-bottom: 500px;
}
.setPasContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  
    /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.setPasContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.setPasContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.setPasContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
.setPasContainer .yuanWrap{
        width: 93%;
    height: 70px;
    border-bottom: 1px solid rgba(223, 223, 223, 0.5);
    margin: auto;
    margin-top: 15px;
}
.setPasContainer .yuanWrap .yuanTitle{
font-weight: bold;
}
.setPasContainer .yuanWrap input{
        padding: 0;
    border: none;
}
.setPasContainer .yuanWrap input::placeholder{
    color:rgba(193, 193, 193, 1) ;
}
/* 确认修改 */
.setPasContainer .certaiBtn{
    width: 91%;
    background: linear-gradient(90deg,rgba(117,165,255,1) 0%,rgba(96,126,255,1) 100%);
    height: 42px;
    margin: auto;
    border-radius: 28px;
    margin-top: 37px;
    text-align: center;
    line-height: 42px;
    color: #fff;
}
</style>
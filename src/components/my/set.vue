<template>
  <div class="setContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">设置</div>
      <div class="btn"></div>
    </div>
    <!-- 修改密码 -->
    <router-link tag="div" to="/changePas" class="setPas">
        <div class="content">修改密码</div>
        <img class="nextF" src="../../images/common/next.png" alt="前进">
    </router-link>
    <!-- 退出登录 -->
    <router-link tag="div" to="/login" class="tuichu">退出登录</router-link>
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
.setContainer {
}
.setContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.setContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.setContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.setContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 修改密码 */
.setContainer .setPas{
       width: 100%;
    background: #fff;
    height: 55px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 0 3%;
}
.setContainer .setPas .content{
    line-height: 55px;
}
.setContainer .setPas .nextF{
    width: 22px;
    height: 22px;
    margin-top: 16px;
}
.setContainer .tuichu{
    width: 100%;
    height: 55px;
    background: #fff;
    margin-top: 10px;
    line-height: 55px;
    text-align: center;
}
</style>
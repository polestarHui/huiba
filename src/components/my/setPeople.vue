<template>
  <div class="setPeopleContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">个人信息</div>
      <div class="btn"></div>
    </div>
    <!-- 内容 -->
    <div class="headImg">
        <div class="title">头像</div>
        <div class="imgWrap">
            <img src="../../images/common/moren.png" alt="默认">
            <img src="../../images/common/next.png" alt="前进">
        </div>
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
.setPeopleContainer {

}
.setPeopleContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.setPeopleContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.setPeopleContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.setPeopleContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
.setPeopleContainer .headImg{
    
}
</style>
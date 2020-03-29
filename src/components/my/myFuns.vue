<template>
  <div class="muFunsContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">我的粉丝</div>
      <div class="btn"></div>
    </div>
    <!-- 列表部分 -->
    <div class="listWrap">
        <img src="../../images/common/moren.png" alt="头像">
        <div class="nickname">小天使</div>
    </div>
    <div class="listWrap">
        <img src="../../images/common/moren.png" alt="头像">
        <div class="nickname">小天使</div>
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
<style scoped>
.muFunsContainer {
  background: #fff;
  padding-bottom: 500px;
}
.muFunsContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.muFunsContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.muFunsContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.muFunsContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 列表部分 */
.muFunsContainer .listWrap{
width: 93%;
height: 48px;
margin: auto;
margin-top: 10px;
display: flex;
border-bottom: 1px solid #eee;
}
.muFunsContainer .listWrap img{
width: 40px;
height: 40px;
border-radius: 50%;
}
.muFunsContainer .listWrap .nickname{
    line-height: 40px;
    margin-left: 10px;
    font-size: 15px;
    font-family: cursive;
    font-weight: bold;
}
</style>
    
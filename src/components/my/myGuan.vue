<template>
  <div class="myGuanContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">我关注的人</div>
      <div class="btn"></div>
    </div>
    <!-- 列表 -->
    <div class="listWrap">
        <div class="leftPart">
            <img src="../../images/common/moren.png" alt="头像">
            <div class="nameWrap">
                <div class="name">吃票面看电影</div>
                <div class="sign">签名是一种态度，我想我可以更酷</div>
            </div>
        </div>
        <div class="guanBtn">已关注</div>
    </div>
    <div class="listWrap">
        <div class="leftPart">
            <img src="../../images/common/moren.png" alt="头像">
            <div class="nameWrap">
                <div class="name">吃票面看电影</div>
                <div class="sign">签名是一种态度，我想我可以更酷</div>
            </div>
        </div>
        <div class="guanBtn">已关注</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    returnB(){
      this.$router.go(-1);
    }
  },
};
</script>
<style scoped>
.myGuanContainer {
  background: #fff;
  padding-bottom: 500px;
}
.myGuanContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.myGuanContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.myGuanContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.myGuanContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 列表部分 */
.myGuanContainer .listWrap{
  width: 93%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.myGuanContainer .listWrap .leftPart{
display: flex;
    width: 70%;
}
.myGuanContainer .listWrap .leftPart img{
  border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.myGuanContainer .listWrap .leftPart .nameWrap{
    
}
.myGuanContainer .listWrap .leftPart .nameWrap .name{
font-size: 15px;
    font-weight: bold;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-family: cursive;
}
.myGuanContainer .listWrap .leftPart .nameWrap .sign{
    font-size: 11px;
    color: #ACAEAD;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.myGuanContainer .listWrap .guanBtn{
      width: 60px;
    height: 30px;
    border: 1px solid #EEEEEE;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    border-radius: 5px;
    color: #A3A3A3;
    margin-top: 6px;
}
</style>
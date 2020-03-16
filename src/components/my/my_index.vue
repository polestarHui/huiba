<template>
  <div class="myContainer">
    <!-- 头部 -->
    <img class="bgImg" src="../../images/common/baBg.png" alt="背景图" />
    <div class="head">
      <div class="btn"></div>
      <div class="content"></div>
      <router-link to="/set"><img src="../../images/common/seting.png" alt="设置" /></router-link>
      
    </div>
    <router-link tag="div" to="/setPeople" class="nickNmaeWrap">
      <img class="moren" src="../../images/common/moren.png" alt="默认头像" />
      <div class="details">
        <div class="name">1831301</div>
        <div class="edit">查看个人主页和编辑资料</div>
      </div>
      <img class="selectJ" src="../../images/common/nextF.png" alt="选择" />
    </router-link>
    <!-- 列表部分 -->
    <div class="listWrap">
      <div class="numberList">
        <div class="first">
          <img src="../../images/common/funs.png" alt="关注">
          <div class="guanContent">关注</div>
        </div>
        <img class="next" src="../../images/common/next.png" alt="下一步">
      </div>
      <div class="numberList">
        <div class="first">
          <img src="../../images/common/tie.png" alt="关注">
          <div class="guanContent">粉丝</div>
        </div>
        <img class="next" src="../../images/common/next.png" alt="下一步">
      </div>
      <div class="numberList">
        <div class="first">
          <img src="../../images/common/guan2.png" alt="关注">
          <div class="guanContent">关注的吧</div>
        </div>
        <img class="next" src="../../images/common/next.png" alt="下一步">
      </div>
      <div class="numberList">
        <div class="first">
          <img src="../../images/common/guan.png" alt="关注">
          <div class="guanContent">帖子</div>
        </div>
        <img class="next" src="../../images/common/next.png" alt="下一步">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.myContainer {
  background: #fff;
      padding-bottom: 500px;
}
.myContainer .bgImg {
  width: 100%;
}
.myContainer .head {
      width: 95%;
    /* margin: auto; */
    height: 44px;
    /* background: #fff; */
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
}
.myContainer .head img {
      width: 40px;
    height: 40px;
    /* margin-left: 15px; */
    margin-top: 10.5px;
}
.myContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.myContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
.myContainer .nickNmaeWrap{
  width: 92%;
    /* margin: auto; */
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 95px;
    left: 50%;
    transform: translateX(-50%);
}
.myContainer .nickNmaeWrap .moren{
width: 50px;
height: 50px;
border-radius: 50%;
}
.myContainer .nickNmaeWrap .details{
    width: 73%;
    margin-top: 6px;
}
.myContainer .nickNmaeWrap .details .name{
    color: #fff;
    font-weight: bold;
}
.myContainer .nickNmaeWrap .details .edit{
    font-size: 10px;
    color: #fff;
}
.myContainer .nickNmaeWrap .selectJ{
    width: 24px;
    height: 24px;
    margin-top: 14px;
}
/* 列表部分 */
.myContainer .listWrap{
        width: 100%;
    position: absolute;
    top: 160px;
    padding-top: 22px;
    background: #fff;
    border-radius: 10px;
}
.myContainer .listWrap .numberList{
    width: 92%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 60px;
}
.myContainer .listWrap .numberList .first{
display: flex;
}
.myContainer .listWrap .numberList .first img{
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-right: 10px;
}
.myContainer .listWrap .numberList .first .guanContent{
    line-height: 45px;
}
.myContainer .listWrap .numberList .next{
    width: 24px;
    height: 24px;
    margin-top: 10.5px;
}
</style>
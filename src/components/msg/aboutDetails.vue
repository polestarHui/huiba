<template>
  <div class="aboutDetailsContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">详情</div>
      <div class="btn"></div>
    </div>
    <!-- 内容部分 -->
    <div class="contentWrap">
      <div class="borderKun">
        <div class="baoguo contentList">
          <img
            class="headImg"
            src="../../images/common/moren.png"
            alt="默认头像"
          />
          <div class="biaoti">
            <div class="nickName">IT的世界</div>
            <div class="guanzhu">关注44.4W 帖子20.5W</div>
            <div class="myNeirong">
              从某种意义上来看，世间一切，都是遇见。就像，冷遇见暖，就有了雨；春遇见冬，有了岁月；天遇见地，有了永恒；人遇见人，有了生命。@泥巴的世界
            </div>
            <img
              class="conmentImg"
              src="../../images/common/bg1.jpg"
              alt="发表图片"
            />
          </div>
        </div>
        <div class="publish">
          <img
            src="../../images/home/sc.png"
            @click="shoucang"
            v-if="isShowCang"
            alt="收藏"
          />
          <img
            src="../../images/home/sc2.png"
            @click="shoucang"
            v-if="!isShowCang"
            alt="已收藏"
          />
          <img src="../../images/home/zan1.png" alt="点赞" />
          <img src="../../images/home/comment.png" alt="评论" />
        </div>
      </div>
    </div>
    <!-- 评论部分 -->
    <div class="conmentTil">全部回复</div>
    <div class="conmentWraps">
      <div class="neiCon">
        <img src="../../images/common/moren.png" alt="默认头像" />
        <div class="nickNmae">
          <div class="name">流浪</div>
          <div class="flow">第二楼 19小时前</div>
          <div class="details">前排前排</div>
        </div>
      </div>
    </div>
    <div class="conmentWraps">
      <div class="neiCon">
        <img src="../../images/common/moren.png" alt="默认头像" />
        <div class="nickNmae">
          <div class="name">流浪</div>
          <div class="flow">第二楼 19小时前</div>
          <div class="details">前排前排</div>
        </div>
      </div>
    </div>
    <div class="conmentWraps">
      <div class="neiCon">
        <img src="../../images/common/moren.png" alt="默认头像" />
        <div class="nickNmae">
          <div class="name">流浪</div>
          <div class="flow">第二楼 19小时前</div>
          <div class="details">前排前排</div>
        </div>
      </div>
    </div>
    <!-- 底部自我评论 -->
    <router-link to="/comment" class="bottomComent">
      <input type="text" readonly placeholder="能不能火就靠你了~">
      <div class="pushComent">发表</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowCang:true
    }
  },
  methods: {
    returnB() {
      this.$router.go(-1);
    },
    shoucang(){
      
    }
  }
};
</script>
<style>
.aboutDetailsContainer {
      padding-bottom: 100px;
    background: #fff;
}
.aboutDetailsContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.aboutDetailsContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.aboutDetailsContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.aboutDetailsContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 内容 */
.aboutDetailsContainer .contentWrap {
  background: #fff;
}
.aboutDetailsContainer .borderKun {
  border-bottom: 1px solid #eee;
  padding-bottom: 7px;
  padding-top: 10px;
}
.aboutDetailsContainer .contentWrap .contentList {
  width: 94%;
  margin: auto;
  height: max-content;
  display: flex;
  margin-top: 10px;
}
.aboutDetailsContainer .contentWrap .contentList .headImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.aboutDetailsContainer .contentWrap .contentList .biaoti {
  margin-left: 10px;
}
.aboutDetailsContainer .contentWrap .contentList .biaoti .nickName {
  font-size: 15px;
  font-weight: bold;
}
.aboutDetailsContainer .contentWrap .contentList .biaoti .guanzhu {
  font-size: 11px;
  color: #929191;
}
.aboutDetailsContainer .contentWrap .contentList .conmentImg {
  width: 220px;
  margin-top: 10px;
}
.aboutDetailsContainer .publish {
  width: 68%;
  margin: auto;
  margin-top: 5px;
}
.aboutDetailsContainer .publish img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
/* 评论部分 */
.aboutDetailsContainer .conmentTil {
  font-size: 12px;
  width: 100%;
  height: 30px;
padding-left: 4%;
background: #fff;
line-height: 33px;
margin-top: 10px;
    padding-bottom: 42px;
}
.aboutDetailsContainer .conmentWraps{
      background: #fff;
    width: 100%;
}
.aboutDetailsContainer .conmentWraps .neiCon{
  display: flex;
    width: 94%;
    margin: auto;
        padding-bottom: 15px;
}
.aboutDetailsContainer .conmentWraps .neiCon img{
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
.aboutDetailsContainer .conmentWraps .neiCon .nickNmae{

}
.aboutDetailsContainer .conmentWraps .neiCon .nickNmae .name{
font-size: 15px;
    font-weight: bold;
}
.aboutDetailsContainer .conmentWraps .neiCon .nickNmae .flow{
    font-size: 11px;
    color: #929191;
}
.aboutDetailsContainer .conmentWraps .neiCon .nickNmae .details{
font-size: 13px
}
/* 底部发表 */
.aboutDetailsContainer .bottomComent{
  display: flex;
      justify-content: space-around;
    width: 100%;
    height: 50px;
    background: #fff;
    position: relative;
    bottom: -50px;
    box-shadow: 0px 1px 32px #eee;
}
.aboutDetailsContainer .bottomComent input{
        width: 50%;
    height: 30px;
    padding: 0;
    margin-left: 15px;
    margin-top: 10px;
    border: none;
    background: #eee;
    border-radius: 14px;
    text-align: center;
}
.aboutDetailsContainer .bottomComent input::placeholder{
  font-size: 14px;
  color: #929191;
}
.aboutDetailsContainer .bottomComent .pushComent{
    height: 30px;
    width: 61px;
    background: #eee;
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 20px;
}
</style>
<template>
  <div class="aboutMeContainer">
    <!-- 头部 -->
    <div class="head">
      <img  @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">艾特我的</div>
      <div class="btn"></div>
    </div>
    <router-link to="/aboutDetails" class="contentWrap">
      <div class="msgWrap">
        <img src="../../images/common/moren.png" alt="头像" />
        <div class="myList">IT的世界刚刚@了你，发表了新帖子</div>
      </div>
      <img class="nextPage" src="../../images/common/go.png" alt="向前" />
    </router-link>
    <div class="contentWrap">
      <div class="msgWrap">
        <img src="../../images/common/moren.png" alt="头像" />
        <div class="myList">IT的世界刚刚@了你，发表了新帖子</div>
      </div>
      <img class="nextPage" src="../../images/common/go.png" alt="向前" />
    </div>
    <div class="contentWrap">
      <div class="msgWrap">
        <img src="../../images/common/moren.png" alt="头像" />
        <div class="myList">IT的世界刚刚@了你，发表了新帖子</div>
      </div>
      <img class="nextPage" src="../../images/common/go.png" alt="向前" />
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        returnB(){
            this.$router.go(-1);
        }
    },
};
</script>
<style>
.aboutMeContainer {
  background: #fff;
  padding-bottom: 500px;
}
.aboutMeContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.aboutMeContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.aboutMeContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.aboutMeContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 列表部分 */
.aboutMeContainer .contentWrap {
  width: 94%;
  margin: auto;
  height: 53px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.aboutMeContainer .contentWrap .msgWrap{
    display: flex;
        width: 90%;
}
.aboutMeContainer .contentWrap .myList {
  line-height: 53px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.aboutMeContainer .contentWrap img {
  width: 36px;
  height: 36px;
  margin-top: 8px;
  margin-right: 5px;
}
.aboutMeContainer .contentWrap img.nextPage {
  width: 17px;
  height: 14px;
  margin-top: 19px;
  margin-right: 0px;
}
</style>
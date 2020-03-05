<template>
  <div class="commentContainer">
    <!-- 头部 -->
    <div class="head">
      <img src="../../images/common/return.png" alt="返回" @click="returnB()" />
      <div class="content">评论</div>
      <div class="btn" @click="returnB()">发表</div>
    </div>
    <!-- 内容部分 -->
    <div class="neirong" contenteditable >说点什么呢~</div>
    <!-- 底部 -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }, 
  mounted(){
    var footer=document.getElementsByClassName('footer');
    footer[0].style.display='none';
  },
  methods: {
    returnB() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.commentContainer {
}
.commentContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.commentContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.commentContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.commentContainer .head .btn {
  width: max-content;
  height: 22px;
  margin-right: 13px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(96, 126, 255, 1);
  margin-top: 11px;
}
/* 内容 */
.commentContainer .neirong{
      width: 94%;
    height: 320px;
    background: #fff;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
    padding: 10px;
}
</style>
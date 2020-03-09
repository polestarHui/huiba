<template>
  <div class="thumbContainer">
      <!-- 头部 -->
    <div class="head">
      <img src="../../images/common/return.png" alt="返回"  @click="returnB"/>
      <div class="content">赞我的</div>
      <div class="btn"></div>
    </div>
    <!-- 内容部分 -->
    <div class="contentWrap">
      <div class="msgWrap">
        <img src="../../images/common/moren.png" alt="头像" />
        <div class="myList">泥巴的世界刚刚赞了你</div>
      </div>
    </div>
    <div class="contentWrap">
      <div class="msgWrap">
        <img src="../../images/common/moren.png" alt="头像" />
        <div class="myList">泥巴的世界刚刚赞了你</div>
      </div>
    </div>
    <div class="contentWrap">
      <div class="msgWrap">
        <img src="../../images/common/moren.png" alt="头像" />
        <div class="myList">泥巴的世界刚刚赞了你</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
      var footer=document.getElementsByClassName('footer');
      footer[0].style.display='none';
    },
    methods:{
        returnB(){
          var footer=document.getElementsByClassName('footer');
      footer[0].style.display='block';
            this.$router.go(-1);
            
        }
    }
};
</script>
<style>
.thumbContainer {
  background: #fff;
  padding-bottom: 500px;
}
.thumbContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.thumbContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.thumbContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.thumbContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 列表部分 */
.thumbContainer .contentWrap {
  width: 94%;
  margin: auto;
  height: 53px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(223, 223, 223, 0.5);
}
.thumbContainer .contentWrap .msgWrap{
    display: flex;
        width: 90%;
}
.thumbContainer .contentWrap .myList {
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
.thumbContainer .contentWrap img {
  width: 36px;
  height: 36px;
  margin-top: 8px;
  margin-right: 5px;
}
.thumbContainer .contentWrap img.nextPage {
  width: 17px;
  height: 14px;
  margin-top: 19px;
  margin-right: 0px;
}
</style>
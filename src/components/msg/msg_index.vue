<template>
  <div class="msgIndexContainer">
    <div class="titleWrap">
      <div class="msgTitle" @click="xiaoxi">
        消息
        <div class="tiao" v-show="isShow1" ></div>
      </div>
      <div class="tongzhi" @click="tongzhi">
        通知
        <div class="tiao" v-show="isShow2" ></div>
      </div>
    </div>
    <!-- 消息 -->
    <div class="msg" v-show="xiaoxi1">
        <div class="msgList">
            <router-link class="listmsg" to="/aboutme">
                <div class="textContent">@我的</div>
                <img src="../../images/common/go.png" alt="前进">
            </router-link>
        </div>
        <div class="msgList">
            <router-link to="/thumb" class="listmsg">
                <div class="textContent">点赞</div>
                <img src="../../images/common/go.png" alt="前进">
            </router-link>
        </div>
    </div>
    <!-- 通知 -->
    <div class="sysTong" v-show="tongzhi1">
        <div class="sysList">
            <div class="time">2020年02月21日</div>
            <div class="sysContent">app开发的过程中</div>
        </div>
    </div>
    <div class="sysTong" v-show="tongzhi1">
        <div class="sysList">
            <div class="time">2020年02月21日</div>
            <div class="sysContent">app开发的过程中</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow1: true,
      isShow2: false,
      xiaoxi1:true,
      tongzhi1:false,
    };
  },
  created(){

  },
  methods: {
    xiaoxi() {
      this.isShow1 = true;
      this.isShow2 = false;
      this.xiaoxi1 = true;
      this.tongzhi1 = false;
    },
    tongzhi() {
      this.isShow1 = false;
      this.isShow2 = true;
      this.xiaoxi1 = false;
      this.tongzhi1 = true;
    }
  }
};
</script>
<style>
.msgIndexContainer {
}
.msgIndexContainer .titleWrap {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 44px;
}
.msgIndexContainer .titleWrap .tiao {
  height: 3px;
  background: #849aea;
  width: 100%;
  border-radius: 100%;
}
/* 消息 */
.msgIndexContainer .msg{
width: 100%;
height: max-content;
background: #fff;
}
.msgIndexContainer .msg .msgList{
height:54px;
width: 94%;
margin: auto;
  margin-top: 8px;
}
.msgIndexContainer .msg .msgList .listmsg{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}
.msgIndexContainer .msg .msgList .listmsg .textContent{
line-height: 54px;
color: rgba(36, 42, 51, 1);
font-size: 16px;
}
.msgIndexContainer .msg .msgList .listmsg img{
    width: 16px;
    height: 14px;
    margin-top: 20px;
}
/* 系统 */
.msgIndexContainer .sysTong{

}
.msgIndexContainer .sysTong .sysList{
width: 94%;
margin: auto;
height: 80px;
border-radius: 8px;
background: #fff;
margin-top: 10px;
box-shadow: 0px 10px 20px 0px rgba(1,24,86,0.2);
}
.msgIndexContainer .sysTong .sysList .time{
    font-size:14px;
font-weight:400;
color:rgba(161,165,177,1);
    padding-top: 15px;
    width: 94%;
    margin: auto;
}
.msgIndexContainer .sysTong .sysList .sysContent{
        font-size: 14px;
    font-weight: bold;
    color: rgba(36,42,51,1);
    padding-top: 8px;
    width: 94%;
    margin: auto;
}
</style>
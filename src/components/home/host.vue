<template>
  <div class="hostContainer">
    <img class="bg" src="../../images/common/baBg.png" alt="背景" />
    <!-- 头部 -->
    <div class="head">
      <img
        class="returnB"
        src="../../images/common/return1.png"
        alt="返回"
        @click="returnB"
      />
      <router-link
        to="/msg"
        tag="img"
        class="msg"
        src="../../images/common/msg.png"
        alt="消息"
      ></router-link>
    </div>
    <div class="nicknameWrap">
      <img src="../../images/common/moren.png" alt="头像" />
      <div class="wrap">
        <div class="baname">王者荣耀代练吧</div>
        <div class="num">关注 30.3W 帖子 33333W</div>
      </div>
      <div class="guan">关注</div>
    </div>
    <div class="whiteBg">
      <div class="zhidingWrap">
        <div class="zhiding">置顶</div>
        <div class="details">恭喜本吧日活跃量达到16万</div>
      </div>
      <div class="zhidingWrap">
        <div class="zhiding">置顶</div>
        <div class="details">恭喜本吧日活跃量达到16万</div>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="neirongWrap">
      <div class="nwieong">
        <img class="headImg" src="../../images/common/moren.png" alt="头像" />
        <div class="nickname">
          <div class="name">柳上枝头</div>
          <div class="time">回复于刚刚</div>
        </div>
      </div>
      <div class="content">
        生在某一种文化中的人，未必知道那个文化是什么，像水中的鱼似的，他不能跳出水外去看清楚那是什么水。假若他自己不能完全客观的去了解自己的文化，那能够客观的来观察的旁人，又因为生活在这种文化以外，就极难咂摸到它的滋味，而往往因一点胭脂，断定他美，或几个麻斑而断定他丑。不幸，假若这个观察者是要急于搜集一些资料，以便证明他心中的一点成见，他也许就只找有麻子的看，而对擦胭脂的闭上眼。
      </div>
      <img class="bg" src="../../images/common/bg1.jpg" alt="背景图">
       <div class="nwieong">
        <img class="headImg" src="../../images/common/moren.png" alt="头像" />
        <div class="nickname">
          <div class="name">柳上枝头</div>
          <div class="time">回复于刚刚</div>
        </div>
      </div>
      <div class="content">
        生在某一种文化中的人，未必知道那个文化是什么，像水中的鱼似的，他不能跳出水外去看清楚那是什么水。假若他自己不能完全客观的去了解自己的文化，那能够客观的来观察的旁人，又因为生活在这种文化以外，就极难咂摸到它的滋味，而往往因一点胭脂，断定他美，或几个麻斑而断定他丑。不幸，假若这个观察者是要急于搜集一些资料，以便证明他心中的一点成见，他也许就只找有麻子的看，而对擦胭脂的闭上眼。
      </div>
      <img class="bg" src="../../images/common/bg1.jpg" alt="背景图">
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
.hostContainer {
  padding-bottom: 100px;
}
.hostContainer .bg {
  width: 100%;
  margin-bottom: 70px;
}
.hostContainer .head {
  display: flex;
  justify-content: space-between;
  width: 93%;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.hostContainer .head .returnB {
  width: 22px;
  height: 22px;
  margin-top: 11px;
}
.hostContainer .head .msg {
  width: 44px;
  height: 44px;
}
.hostContainer .nicknameWrap {
  display: flex;
  width: 93%;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}
.hostContainer .nicknameWrap img {
  width: 45px;
  height: 45px;
  border-radius: 10px;
}
.hostContainer .nicknameWrap .wrap {
  margin-left: 15px;
}
.hostContainer .nicknameWrap .wrap .baname {
  font-size: 15px;
  font-weight: bold;
  color: #fff;
}
.hostContainer .nicknameWrap .wrap .num {
  font-size: 10px;
  color: #fff;
}
.hostContainer .nicknameWrap .guan {
  position: absolute;
  right: 0;
  width: 58px;
  height: 25px;
  background: #fff;
  text-align: center;
  border-radius: 15px;
  line-height: 25px;
  font-size: 13px;
}
.hostContainer .whiteBg {
  width: 92%;
  background: #fff;
  position: absolute;
  top: 157px;
  border-radius: 6px;
  left: 50%;
  transform: translateX(-50%);
}
.hostContainer .whiteBg .zhidingWrap {
  width: 89%;
  margin: auto;
  display: flex;
  height: 40px;
  line-height: 40px;
}
.hostContainer .whiteBg .zhidingWrap .zhiding {
  color: #607eff;
  font-size: 10px;
  margin-right: 15px;
}
.hostContainer .whiteBg .zhidingWrap .details {
  font-size: 14px;
}
/* 列表 */
.hostContainer .neirongWrap {
  width: 100%;
  background: #fff;
  border-radius: 10px;
}
.hostContainer .nwieong {
  display: flex;
  width: 93%;
  margin: auto;
  padding: 15px 0;
  padding-bottom: 5px;
}
.hostContainer .nwieong .headImg {
  width: 35px;
  height: 35px;
  margin-right: 15px;
  border-radius: 50%;
}
.hostContainer .nwieong .nickname {
}
.hostContainer .nwieong .nickname .name {
  font-size: 13px;
  font-weight: bold;
}
.hostContainer .nwieong .nickname .time {
  font-size: 10px;
  color: #a7a6a6;
}
.hostContainer .neirongWrap .content {
  font-size: 13px;
  width: 93%;
  margin: auto;
}
.hostContainer .neirongWrap .bg {
  width: 200px;
  border-radius: 5px;
  margin-left: 3.5%;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>
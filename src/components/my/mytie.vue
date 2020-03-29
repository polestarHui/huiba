<template>
  <div class="mytieContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">我的帖子</div>
      <div class="btn"></div>
    </div>
    <div class="contentWrap">
    <div class="borderKun">
          <div class="baoguo contentList">
            <img
              class="headImg"
              src="../../images/common/moren.png"
              alt="默认头像"
            />
            <div class="biaoti">
              <div class="nickName">泥巴的世界</div>
              <!-- <div class="guanzhu">关注44.4W 帖子20.5W</div> -->
              <div class="myNeirong">
                从某种意义上来看，世间一切，都是遇见。就像，冷遇见暖，就有了雨；春遇见冬，有了岁月；天遇见地，有了永恒；人遇见人，有了生命。
              </div>
              <img
                class="conmentImg"
                src="../../images/common/bg1.jpg"
                alt="发表图片"
              />
            </div>
          </div>
          <!-- <div class="publish">
            <img src="../../images/home/sc.png" @click="shoucang" v-if="isShowCang" alt="收藏" />
            <img src="../../images/home/sc2.png" @click="shoucang" v-if="!isShowCang" alt="已收藏">
            <img src="../../images/home/zan1.png" alt="点赞" />
            <img src="../../images/home/comment.png" alt="评论" />
          </div> -->
        </div>
        <div class="borderKun">
          <div class="baoguo contentList">
            <img
              class="headImg"
              src="../../images/common/moren.png"
              alt="默认头像"
            />
            <div class="biaoti">
              <div class="nickName">泥巴的世界</div>
              <!-- <div class="guanzhu">关注44.4W 帖子20.5W</div> -->
              <div class="myNeirong">
                从某种意义上来看，世间一切，都是遇见。就像，冷遇见暖，就有了雨；春遇见冬，有了岁月；天遇见地，有了永恒；人遇见人，有了生命。
              </div>
              <img
                class="conmentImg"
                src="../../images/common/bg1.jpg"
                alt="发表图片"
              />
            </div>
          </div>
          <!-- <div class="publish">
            <img src="../../images/home/sc.png" @click="shoucang" v-if="isShowCang" alt="收藏" />
            <img src="../../images/home/sc2.png" @click="shoucang" v-if="!isShowCang" alt="已收藏">
            <img src="../../images/home/zan1.png" alt="点赞" />
            <img src="../../images/home/comment.png" alt="评论" />
          </div> -->
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
<style scoped>
.mytieContainer {
  background: #fff;
  padding-bottom: 500px;
}
.mytieContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.mytieContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.mytieContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.mytieContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
/* 列表 */
.mytieContainer .borderKun {
  border-bottom: 1px solid #eee;
  padding-bottom: 7px;
}
.mytieContainer .contentWrap .contentList {
  width: 94%;
  margin: auto;
  height: max-content;
  display: flex;
  margin-top: 10px;
}
.mytieContainer .contentWrap .contentList .headImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.mytieContainer .contentWrap .contentList .biaoti {
  margin-left: 10px;
}
.mytieContainer .contentWrap .contentList .biaoti .nickName {
  font-size: 15px;
  font-weight: bold;
}
.mytieContainer .contentWrap .contentList .biaoti .guanzhu {
  font-size: 11px;
  color: #929191;
}
.mytieContainer .contentWrap .contentList .conmentImg {
  width: 220px;
  margin-top: 10px;
}
.mytieContainer .publish {
  width: 68%;
  margin: auto;
  margin-top: 5px;
}
.mytieContainer .publish img {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
</style>
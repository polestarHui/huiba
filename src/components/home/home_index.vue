<template>
  <div class="homeIndexContainer">
    <!-- 搜索 -->
    <div class="searchWrap">
      <router-link class="search" to="/search">
        <img src="../../images/common/search.png" alt="搜索" />
        <input readonly type="text" placeholder="大家都在搜：武汉疫情" />
      </router-link>
      <div class="whoPlay">在家玩</div>
    </div>

    <!-- tab栏 -->
    <div class="titleWrap">
      <div class="recoment" @click="tabClick1">
        推荐
        <div class="tiao" v-show="isShow1"></div>
      </div>
      <div class="home" @click="tabClick2">
        首页
        <div class="tiao" v-show="isShow2"></div>
      </div>
    </div>
    <div class="contentWrap">
      <!-- 推荐部分 -->
      <div class="tuijian" v-show="isShow1">
        <div class="title">你的兴趣我懂的</div>
        <div class="tuijianWrap">
          <router-link to="/host" tag="div" class="card">
            <img src="../../images/home/piano.png" alt="舞蹈" />
            <div class="centerTil">钢琴俱乐部</div>
            <div class="guanzhuNum">关注 49.1W &nbsp;帖子 35.9W</div>
            <div class="jianjie">各种舞蹈尽在本部，精彩无限绽放</div>
            <div class="isGuan">关注</div>
          </router-link>
          <div class="card">
            <img src="../../images/home/dongman.png" alt="舞蹈" />
            <div class="centerTil">动漫俱乐部</div>
            <div class="guanzhuNum">关注 49.1W &nbsp;帖子 35.9W</div>
            <div class="jianjie">各种舞蹈尽在本部，精彩无限绽放</div>
            <div class="isGuan">关注</div>
          </div>
          <div class="card">
            <img src="../../images/home/piano.png" alt="舞蹈" />
            <div class="centerTil">钢琴俱乐部</div>
            <div class="guanzhuNum">关注 49.1W &nbsp;帖子 35.9W</div>
            <div class="jianjie">各种舞蹈尽在本部，精彩无限绽放</div>
            <div class="isGuan">关注</div>
          </div>
          <div class="card">
            <img src="../../images/home/dongman.png" alt="舞蹈" />
            <div class="centerTil">动漫俱乐部</div>
            <div class="guanzhuNum">关注 49.1W &nbsp;帖子 35.9W</div>
            <div class="jianjie">各种舞蹈尽在本部，精彩无限绽放</div>
            <div class="isGuan">关注</div>
          </div>
        </div>
      </div>
      <!-- 首页部分 -->
      <div class="neirongWrap" v-show="isShow2">
        <router-link to="/host" tag="div" class="borderKun">
          <div class="baoguo contentList">
            <img
              class="headImg"
              src="../../images/common/moren.png"
              alt="默认头像"
            />
            <div class="biaoti">
              <div class="nickName">泥巴的世界</div>
              <div class="guanzhu">关注44.4W 帖子20.5W</div>
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
          <div class="publish">
            <img src="../../images/home/sc.png" @click="shoucang" v-if="isShowCang" alt="收藏" />
            <img src="../../images/home/sc2.png" @click="shoucang" v-if="!isShowCang" alt="已收藏">
            <img src="../../images/home/zan1.png" alt="点赞" />
            <img src="../../images/home/comment.png" alt="评论" />
          </div>
        </router-link> 
        <!-- 第二条 -->
        <div class="borderKun">
          <div class="baoguo contentList">
            <img
              class="headImg"
              src="../../images/common/moren.png"
              alt="默认头像"
            />
            <div class="biaoti">
              <div class="nickName">泥巴的世界</div>
              <div class="guanzhu">关注44.4W 帖子20.5W</div>
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
          <div class="publish">
            <img src="../../images/home/sc.png" @click="shoucang" v-if="isShowCang" alt="收藏" />
            <img src="../../images/home/sc2.png" @click="shoucang" v-if="!isShowCang" alt="已收藏">
            <img src="../../images/home/zan1.png" alt="点赞" />
            <img src="../../images/home/comment.png" alt="评论" />
          </div>
        </div>
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
      isShowCang:true
    };
  },
  created(){
   var footer = document.getElementsByClassName("footer");
    footer[0].style.display = "block";
  },
  methods: {
    tabClick1() {
      this.isShow1 = true;
      this.isShow2 = false;
    },
    tabClick2() {
      this.isShow1 = false;
      this.isShow2 = true;
    },
    shoucang(){
        this.isShowCang=false;
    }
  }
};
</script>
<style scoped>
.homeIndexContainer {
  width: 100%;
  height: max-content;
  background: #fff;
  padding-bottom: 100px;
}
/* 搜索 */
.homeIndexContainer .searchWrap {
  width: 94%;
  margin: auto;
  background: #fff;
  height: 44px;
  display: flex;
  justify-content: space-between;
}
.homeIndexContainer .searchWrap .search {
  width: 78%;
  height: 28px;
  background: #efeff4;
  margin-top: 8px;
  border-radius: 13px;
}
.homeIndexContainer .searchWrap .search img {
  width: 18px;
  height: 18px;
  margin-left: 12px;
  margin-top: 5px;
}
.homeIndexContainer .searchWrap .search input {
  width: 57%;
  height: 28px;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  margin-left: 12px;
  font-size: 15px;
}
.homeIndexContainer .searchWrap .search input::placeholder {
  font-size: 15px;
}
.homeIndexContainer .searchWrap .whoPlay {
  border-radius: 13px;
  width: 17%;
  height: 26px;
  background: rgba(96, 126, 255, 0.2);
  margin-top: 9px;
  line-height: 26px;
  color: rgba(96, 126, 255, 1);
  text-align: center;
  font-size: 14px;
}
/* tab栏 */
.homeIndexContainer .titleWrap {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 44px;
}
.homeIndexContainer .titleWrap div {
  width: 30%;
  text-align: center;
}

.homeIndexContainer .titleWrap .tiao {
  width: 25%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  border-radius: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* 推荐 */
.homeIndexContainer .contentWrap {
}
.homeIndexContainer .contentWrap .tuijian {
  width: 100%;
  margin: auto;
  height: max-content;
  background: #fff;
}
.homeIndexContainer .contentWrap .tuijian .title {
  height: 35px;
  width: 94%;
  margin: auto;
  font-size: 15px;
  font-weight: bold;
  line-height: 50px;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap {
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap .card {
  width: 45%;
  border-radius: 5px;
  height: 180px;
  margin-left: 3%;
  margin-top: 10px;
  box-shadow: 0px -1px 3px #ccc;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap .card img {
  width: 65px;
  position: relative;
  height: 65px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  border-radius: 15px;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap .card .centerTil {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap .card .guanzhuNum {
  font-size: 10px;
  color: #a9a2a2;
  text-align: center;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap .card .jianjie {
  text-align: center;
  font-size: 11px;
  width: 94%;
  margin: auto;
  line-height: 1;
}
.homeIndexContainer .contentWrap .tuijian .tuijianWrap .card .isGuan {
  width: 45%;
  height: 20px;
  background: linear-gradient(
    90deg,
    rgba(117, 165, 255, 1) 0%,
    rgba(96, 126, 255, 1) 100%
  );
  color: #fff;
  border-radius: 15px;
  text-align: center;
  line-height: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 7px;
  font-size: 16px;
}
/* 首页 */
.homeIndexContainer .neirongWrap {
  /* height: max-content;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px; */
}
.homeIndexContainer .borderKun{
       border-bottom: 1px solid #eee;
    padding-bottom: 7px;
}
.homeIndexContainer .contentWrap .contentList {
  width: 94%;
  margin: auto;
  height: max-content;
  display: flex;
  margin-top: 10px;
}
.homeIndexContainer .contentWrap .contentList .headImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.homeIndexContainer .contentWrap .contentList .biaoti {
  margin-left: 10px;
}
.homeIndexContainer .contentWrap .contentList .biaoti .nickName {
  font-size: 15px;
  font-weight: bold;
}
.homeIndexContainer .contentWrap .contentList .biaoti .guanzhu {
  font-size: 11px;
  color: #929191;
}
.homeIndexContainer .contentWrap .contentList .conmentImg {
  width: 220px;
  margin-top: 10px;
}
.homeIndexContainer .publish {
  width: 68%;
  margin: auto;
  margin-top: 5px;
}
.homeIndexContainer .publish img {
      width: 18px;
    height: 18px;
    margin-right: 10px;
}
</style>
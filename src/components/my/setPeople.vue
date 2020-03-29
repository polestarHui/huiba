<template>
  <div class="setPeopleContainer">
    <!-- 头部 -->
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">个人信息</div>
      <div class="btn"></div>
    </div>
    <!-- 内容 -->
    <div class="headImg">
      <div class="title">头像</div>
      <div class="imgWrap">
        <img class="imgHead" src="../../images/common/moren.png" alt="默认" />
        <img class="next" src="../../images/common/next.png" alt="前进" />
      </div>
    </div>
    <!-- 昵称 -->
    <router-link to="/setName" tag="div" class="nameWrap teshu">
      <div class="nameTitle">昵称</div>
      <div class="contentWrap">
        <div class="name">1831301</div>
        <img src="../../images/common/next.png" alt="前进" />
      </div>
    </router-link>
    <router-link to="/setPhone" tag="div" class="nameWrap">
      <div class="nameTitle">邮箱账号</div>
      <div class="contentWrap">
        <div class="name">18337281301</div>
        <img src="../../images/common/next.png" alt="前进" />
      </div>
    </router-link>
    <router-link to="/myba" tag="div" class="nameWrap">
      <div class="nameTitle">创建属于自己的吧</div>
      <div class="contentWrap">
        <div class="name"></div>
        <img src="../../images/common/next.png" alt="前进" />
      </div>
    </router-link>
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
.setPeopleContainer {
}
.setPeopleContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.setPeopleContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.setPeopleContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.setPeopleContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
.setPeopleContainer .headImg {
  width: 100%;
  height: 55px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 3%;
}
.setPeopleContainer .headImg .title {
  line-height: 55px;
}
.setPeopleContainer .headImg .imgWrap {
  display: flex;
  width: 21%;
  justify-content: space-between;
}
.setPeopleContainer .headImg .imgWrap .imgHead {
  width: 40px;
  height: 40px;
  margin-top: 7.5px;
}
.setPeopleContainer .headImg .imgWrap .next {
  width: 22px;
  height: 22px;
  margin-top: 16.5px;
}
/* 昵称 */
.setPeopleContainer .nameWrap {
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  padding: 0 3%;
  justify-content: space-between;
}
.setPeopleContainer .teshu {
  margin-top: 10px;
}
.setPeopleContainer .nameWrap .nameTitle {
  line-height: 50px;
}
.setPeopleContainer .nameWrap .contentWrap {
  display: flex;
  justify-content: space-between;
  width: max-content;
}
.setPeopleContainer .nameWrap .contentWrap .name {
  line-height: 50px;
  font-size: 13px;
}
.setPeopleContainer .nameWrap .contentWrap img {
  width: 22px;
  height: 22px;
  margin-top: 14px;
  margin-left: 10px;
}
</style>
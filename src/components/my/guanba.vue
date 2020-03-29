<template>
  <div class="guanbaContainer">
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">我关注的吧</div>
      <div class="btn" @click="showRemoveBtn">编辑</div>
    </div>
    <!-- 列表部分 -->
    <div class="listContent">
      <img src="../../images/common/morenBa.png" alt="吧图" />
      <div class="listWrap">
        <div>
          <div class="name">毕设吧</div>
          <div class="jingyan">经验1/5</div>
        </div>

        <div class="removeBtn" v-if="removeBtn" @click="removeBa">删除</div>
      </div>
    </div>
    <div class="listContent">
      <img src="../../images/common/morenBa.png" alt="吧图" />
      <div class="listWrap">
        <div>
          <div class="name">毕设吧</div>
          <div class="jingyan">经验1/5</div>
        </div>

        <div class="removeBtn" v-if="removeBtn">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        removeBtn:false
    };
  },
  methods: {
    returnB() {
      this.$router.go(-1);
    },
    showRemoveBtn(){
        this.removeBtn=true;
    },
    removeBa(){
        
    }
  }
};
</script>
<style scoped>
.guanbaContainer {
  background: #fff;
  padding-bottom: 500px;
}
.guanbaContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.guanbaContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.guanbaContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.guanbaContainer .head .btn {
  width: max-content;
  height: 22px;
  margin-right: 15px;
  line-height: 44px;
}
/* 列表 */
.guanbaContainer .listContent {
  width: 93%;
  margin: auto;
  display: flex;
  margin-top: 15px;
}
.guanbaContainer .listContent img {
  width: 65px;
  height: 65px;
  border-radius: 5px;
  margin-right: 15px;
}
.guanbaContainer .listContent .listWrap {
  display: flex;
  justify-content: space-between;
  width: 75%;
}
.guanbaContainer .listContent .listWrap .name {
  font-size: 16px;
  font-weight: bold;
  margin-top: 9px;
}
.guanbaContainer .listContent .listWrap .jingyan {
  font-size: 13px;
  color: #a4a5a4;
  margin-top: 5px;
}
.guanbaContainer .listContent .listWrap .removeBtn {
  width: 48px;
  text-align: center;
  height: 25px;
  background: #e85454;
  font-size: 13px;
  color: #fff;
  border-radius: 5px;
  line-height: 25px;
  margin-top: 20px;
}
</style>
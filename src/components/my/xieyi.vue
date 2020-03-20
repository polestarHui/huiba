<template>
  <div class="xieyiContainer">
    <div class="head">
      <img @click="returnB" src="../../images/common/return.png" alt="返回" />
      <div class="content">建吧协议</div>
      <div class="btn"></div>
    </div>
    <div class="contentConainer">使用v-html来渲染即可</div>
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
.xieyiContainer {
  background: #fff;
  padding-bottom: 300px;
}
.xieyiContainer .head {
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;

  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgba(223, 223, 223, 0.5); */
}
.xieyiContainer .head img {
  width: 22px;
  height: 22px;
  margin-left: 15px;
  margin-top: 10.5px;
}
.xieyiContainer .head .content {
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.xieyiContainer .head .btn {
  width: 22px;
  height: 22px;
  margin-right: 15px;
}
.xieyiContainer .contentConainer{
    width: 93%;
    margin: auto;
    margin-top: 15px;
}
</style>
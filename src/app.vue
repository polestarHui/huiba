<template>
  <div class="homeIndex">
    <!-- 这是头部 -->
    <!-- 内容部分 -->
    <div class="mui-content">
      <!-- 给组件添加过度动画效果 -->
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab footer">
      <router-link class="mui-tab-item" to="/home">
        <div @click="selected">
          <div class="mui-tab-item mui-active" v-show="flag">
            <img
              class="mui-icon mui-icon-home"
              src="../src/images/common/homeT.png"
              alt=""
            />
            <span class="mui-tab-label">首页</span>
          </div>
          <div v-show="!flag">
            <img
              class="mui-icon mui-icon-home"
              src="../src/images/common/homeF.png"
              alt="首页"
            />
            <span class="mui-tab-label">首页</span>
          </div>
        </div>
      </router-link>
      <router-link class="mui-tab-item" to="/msg">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link to="/my" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 控制tab变色
      flag: true,
      flag2: false,
      flag3: false
    };
  },
  methods: {
       // 设置选中的事件
    selected() {
      if (this.flag === false) {
        this.flag = true;
        this.flag2 = false;
        this.flag3 = false;
      }
    },
  },
};
</script>
<style scoped>
</style>
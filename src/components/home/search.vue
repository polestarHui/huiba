<template>
    <div class="searchContainer">
        <div class="searchWrap">
      <router-link class="search" to="/search">
        <img src="../../images/common/search.png" alt="搜索" />
        <input type="text" placeholder="大家都在搜：武汉疫情" />
      </router-link>
      <div class="whoPlay">搜索</div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
      return{

      }
    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style>
    .searchContainer {
  width: 100%;
  height: max-content;
  background: #fff;
 /* padding-bottom: 100px; */
}
/* 搜索 */
.searchContainer .searchWrap {
  width: 94%;
  margin: auto;
  background: #fff;
  height: 44px;
  display: flex;
  justify-content: space-between;
}
.searchContainer .searchWrap .search {
  width: 78%;
  height: 28px;
  background: #efeff4;
  margin-top: 8px;
  border-radius: 13px;
}
.searchContainer .searchWrap .search img {
  width: 18px;
  height: 18px;
  margin-left: 12px;
  margin-top: 5px;
}
.searchContainer .searchWrap .search input {
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
.searchContainer .searchWrap .search input::placeholder {
  font-size: 15px;
}
.searchContainer .searchWrap .whoPlay {
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
</style>
<template>
    <div class="hostContainer">
        <img class="bg" src="../../images/common/baBg.png" alt="背景">
        <!-- 头部 -->
        <div class="head">
            <img class="returnB" src="../../images/common/return1.png" alt="返回" @click="returnB"> 
            <router-link to="/msg" tag="img" class="msg" src="../../images/common/msg.png" alt="消息"></router-link>
        </div>
        <div class="nicknameWrap">
        <img src="../../images/common/moren.png" alt="头像">
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
        <div class="nwieong">
            <img src="../../images/common/moren.png" alt="头像">
            <div class="nickname">
                <div class="name">柳上枝头</div>
                <div class="time">回复于刚刚</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        returnB(){
this.$router.go(-1);
        }
    }
}
</script>
<style>
    .hostContainer{

    }
    .hostContainer .bg{
    width: 100%;
    }
    .hostContainer .head{
            display: flex;
    justify-content: space-between;
    width: 93%;
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    }
    .hostContainer .head .returnB{
width: 22px;
    height: 22px;
    margin-top: 11px;
    }
    .hostContainer .head .msg{
    width: 44px;
    height: 44px;
    }
    .hostContainer .nicknameWrap{
display: flex;
    width: 93%;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    }
    .hostContainer .nicknameWrap img{
    width: 38px;
    height: 38px;
    border-radius: 10px;
    }
    .hostContainer .nicknameWrap .wrap{
    margin-left: 15px;
    }
    .hostContainer .nicknameWrap .wrap .baname{
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    }
    .hostContainer .nicknameWrap .wrap .num{
    font-size: 10px;
    color: #fff;
    }
    .hostContainer .nicknameWrap .guan{
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
     .hostContainer .whiteBg{
    width: 92%;
    background: #fff;
    position: absolute;
    top: 157px;
    border-radius: 6px;
    left: 50%;
    transform: translateX(-50%);
     }
     .hostContainer .whiteBg .zhidingWrap{
    width: 89%;
    margin: auto;
    display: flex;
    height: 40px;
    line-height: 40px;
     }
     .hostContainer .whiteBg .zhidingWrap .zhiding{
color: #607eff;
    font-size: 10px;
    margin-right: 15px;
     }
     .hostContainer .whiteBg .zhidingWrap .details{
    font-size: 14px;
     }
</style>
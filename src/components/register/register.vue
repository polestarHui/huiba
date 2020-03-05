<template>
    <div class="registerContainer">
        <img class="fork" src="../../images/common/fork.png" alt="取消">
        <!-- div.rig -->
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        var footer=document.getElementsByClassName('footer');
        footer[0].style.display='none';
    }
}
</script>
<style>
    .registerContainer{

    }
    .registerContainer .fork{
        width: 22px;
        height: 22px;
        position: absolute;
            right: 36px;
    top: 47px;
    }
</style>
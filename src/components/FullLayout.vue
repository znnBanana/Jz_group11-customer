<template>
    <div class="full_layout">
        <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="returnHandler"
        />
        <!-- 加插槽 -->
        <slot/>
    </div>
</template>
<script>
export default {
    props:["title"],
    methods:{
        returnHandler(){
            // 回退一步
            this.$router.go(-1);
        }
    },

}
</script>
<style scoped>
    .full_layout{
        z-index:20;
        position: absolute;
        top:0;
        bottom: 0;
        width: 100%;
        background-color: #fff;
    }
</style>
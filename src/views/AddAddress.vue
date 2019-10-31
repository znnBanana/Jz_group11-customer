<template>
    <div class="addaddress">
        <!-- 添加地址头部 -->
        <div class="one"><van-nav-bar
            title="添加地址"
            left-text="返回"
            left-arrow
            @click-left="returnHandler"
        /></div>
        <van-address-edit
            :area-list="areaList"   
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
export default {
    data(){
        return{
            areaList,
            searchResult: []
        }
    },
    methods:{
        returnHandler(){
            this.$router.push({path:"/manager/address"})
        }
    },
    created(){

    },

}
</script>
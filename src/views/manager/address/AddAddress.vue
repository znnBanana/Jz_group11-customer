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
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
        />
        {{userInfo}}
    </div>
</template>

<script>
import { mapState } from 'vuex'
import areaList from '../../../utils/areaList'
export default {
    data(){
        return{
            areaList,
            searchResult: []
        }
    },
    computed:{
        ...mapState("user",["userInfo"])
    },
    methods:{
        returnHandler(){
            this.$router.push({path:"/manager/address"})
        },
        // 保存地址信息
        onSave(a){
            console.log(a)
        },
        onDelete(){

        }
    },
    created(){
        
    },

}
</script>
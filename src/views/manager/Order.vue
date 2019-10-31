<template>
    <div class="order">
        <!-- 标题 -->
        <h2 style="text-align:center">我的订单</h2>
        <!-- 标签页 -->
        <!-- {{orders}} -->
        <van-tabs v-model="status">
            <van-tab title="全部订单">
            </van-tab>
            <!-- <van-tab title="未付款" name="未付款"></van-tab> -->
            <van-tab title="待服务" name="待派单"></van-tab>
            <van-tab title="待确认" name="待确认"></van-tab>
            <van-tab title="已完成" name="已完成"></van-tab>
        </van-tabs>
        <!-- 商品列表 -->
        <div class="o_list" v-for="o in orderStatusFilter(this.status)" :key="o.id">
            <van-row type="flex" justify="space-around">
            <van-col span="10">
                <!-- <div> -->
                    <img src="../../assets/images/home_21.png" alt="">
                <!-- </div> -->
            </van-col>
            <van-col span="16">
                <p class="orderTime">下单时间：{{o.orderTime}}</p>
                <p class="total">总额：{{o.total}}</p>
                <p class="status">进度：{{o.status}}</p>
            </van-col>
        </van-row>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions,mapGetters } from 'vuex'
export default {
    data() {
        return {
            status:"全部订单"
        }
    },
    created(){
        this.findAllOrder()
    },
    computed:{
        ...mapState("order",["orders"]),
        ...mapGetters("order",["orderStatusFilter"])
    },
    methods:{
        ...mapActions("order",["findAllOrder"])

    }
    
}
</script>

<style scoped>
    .o_list img{
        height:100px;
        width: 100px;
    }
    .orderTime,.total,.status{
        font-size: 14px;
    }
</style>
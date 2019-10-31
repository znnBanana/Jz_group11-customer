<template>
    <div class="home">
        <!-- 图片区域 -->
        <header>
            <img style="width:100%" src="../../assets/images/home_02.png" alt="">
        </header> 
        <!-- 栏目区 -->
        <!-- {{categories}} -->
        <van-grid :column-num="3">
            <van-grid-item
                v-for="c in categories"
                :key="c.id"
                :icon="c.icon"
                :text="c.name"
            />
        </van-grid>
        <!-- 产品区 -->
        <!-- {{products}} -->
        <van-grid :column-num="2">
            <van-grid-item
                v-for="p in products"
                :key="p.id">
                <van-image :src="p.photo" />
                <div>{{p.name}}</div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import {mapState,mapActions, mapMutations} from 'vuex'

export default {
    data() {
        return{

        }
    },
    created(){
        this.findAllCategories();
        this.findAllProducts();
    },
    computed:{
        ...mapState("home",["categories","products"])
    },
    methods:{
        ...mapActions("home",["findAllCategories","findAllProducts"]),
        ...mapMutations("home",["refreshCategories"]),
        
    }
}
</script>
<style scoped>
    .home {
        padding-bottom: 50px;
    }
    .header {
        height: 200px;
        overflow: hidden;
    }
</style>
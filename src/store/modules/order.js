import {get} from '../../http/axios'

export default {
    namespaced: true,
    state: {
        orders:[]
    },
    getters:{
        orderStatusFilter:(state)=>{
            return function(status){
                if(status){
                    return state.orders.filter(item=>item.status === status)
                }else{
                    return  state.orders;
                }
            }
        }
    },
    mutations: {
        refreshOrder(state,orders){
            state.orders = orders
        }
        
    },
    actions: {
        // 查询当前用户的所有订单
        async findAllOrder({commit,rootState}){
            let customerId = rootState.user.userInfo.id
            let response = await get("/order/query",{customerId})
            commit("refreshOrder",response.data)
        }
    },
}


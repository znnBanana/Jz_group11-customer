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
        async findAllOrder(context){
            let response = await get("/order/findAll")
            context.commit("refreshOrder",response.data)
        }
    },
}


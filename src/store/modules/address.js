import { get } from "../../http/axios";
// import user from "./user";
// import address from "address";

export default {
    namespaced: true,
    state: {
        addresses:[]
    },
    mutations: {
        refreshAddress(state,addresses){
            // console.log(addresses,'======')
            // addresses.forEach((item)=>{
            //     state.addresses = [];
            //     let d={
            //         id:item.id,
            //         name:item.province,
            //         tel:item.telephone,
            //         address:item.address
            //     }
            //     state.addresses.push(d);
            // })
            state.addresses = addresses

        }   
    },
    actions: {
        // async findAddress({commit,rootState}){
        //     let response = await get("/address/findByCustomerId",{id:rootState.user.userInfo.id})
        //     commit("refreshAddress",response.data)
        // },
        async findAddress(context,id){
            // 根据用户id查询地址
            let response = await get("/address/findByCustomerId?id="+id)
            .then((response)=>{
                let addresses = [];
                response.data.forEach(item=>{
                    console.log(item,'===')
                    let address = {
                        id: item.id,
                        name: 'znn',
                        tel: item.telephone,
                        address: item.province+""+item.city+""+item.area+""+item.address
                    }
                    addresses.push(address);
                })
                context.commit("refreshAddress",addresses)
                // console.log(response)
            })
        }
        

    },
}

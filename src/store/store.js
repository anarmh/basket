import { createStore } from "vuex";
const store=createStore({
    mutations:{
        setBasket(state,p){
            state.baskets.push(p)
        }
    },
    getters:{
       getBaskets(state){
        return state.baskets
       },
       getBasketsLength(state){
        return state.baskets.length
       }
    },
    actions:{
        addBaskets(state,payload){
            state.commit("setBasket",payload)
        }
    },
    state(){
        return{
            baskets:[]
        }
    }
})

export default store
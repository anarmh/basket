<template>
    <div class="appHeader">
        <div @click="$router.push('/')" class="logo">logo</div>
        <div class="box">
            <div class="badge" v-if=" $store.getters.getBasketsLength!==0">{{ $store.getters.getBasketsLength }} </div>
            <svg @click="onShow" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <ShopContext @goBasket="show=false" v-if="show"/>
        </div>
    </div>
</template>

<script>
import ShopContext from './ShopContext.vue';
export default{
    name:"AppHeader",
    methods:{
        onShow(){
           if(this.$store.getters.getBasketsLength!==0) {
         
               this.show = !this.show
         }
           }
        
    },
    data(){
        return{
            show:false,
        }
    },
    components:{
        ShopContext,
    }
}
</script>
<style scoped>
.appHeader{
    background: #fff;
    border-bottom: 1px solid #eff1f3;
    padding: 16px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box{
    position: relative;
    cursor: pointer;
    color: #374051;
    transition: all .5s;
}
.box:hover{
    color: #1874ff;
}
.badge{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #1874ff;
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 10px;
}
.logo{
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 12px;
}


</style>
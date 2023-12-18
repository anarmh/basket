<template>
    <div class="contextWrapper">
        <div class="contextItem" v-for="item in $store.getters.getBaskets" :key="item">
           <div class="image">
            <img :src="item.image" alt="">
           </div>
           <div class="content">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="price">
                        {{item.price}}$
                    </div>
           </div>
        </div>

        <div class="contextItem complateBox" @click="goBasket">
                Add to basket!
        </div>
    </div>
</template>

<script >
export default{
    name:"ShopContext",
    methods:{
        goBasket(){
            this.$router.push('/basket-preview')
            this.$emit('goBasket')
        }
    }
}
</script>

<style scoped>
.contextWrapper{
    z-index: 10;
    background-color: #fff;
    position: absolute;
    right: 0;
    border: 1px solid #dee2e6;
    padding: 8px 0;
    filter: drop-shadow(0px 8px 12px rgba(0,0,0,0.15));
    border-radius: 8px;
    min-width: 250px;
    max-width: 500px;
    width: max-content;
}

.contextItem{
    display: flex;
    padding: 0 16px;
    margin-bottom: 8px;
  
}
    .image{
        margin-right: 12px;
    }

    .image>img{
        width: 50px;
        height: 50px;
        object-fit: fill;
    }
    .content{
        display: flex;
        flex-direction: column;
    }
    .price{
        margin-top: 4px;
        font-size: 12px;
        color: #1874ff;
    }

    .title{
        font-size: 20px;
        font-weight: 600;
        color: #262b37 !important;
    }
    .borderBottom{
        border-bottom: 1px solid #eff1f3;
    }

   .complateBox{
    border-top: 1px solid #dee2e6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    color: #1874ff;
   }
</style>
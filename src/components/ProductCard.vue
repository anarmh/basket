<template>
    <div class="productCard" :key="item.id">
        <div @click="onClickBox" class="box" :class="item.id==1? 'boxActive':''">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </div>
       <div class="cardImage">
        <img :src="item.image"/>
       </div>
       <div class="desc">
            <div class="btn" @click="$router.push('/product-detail/'+item.id)">
                Detail
            </div>
            <span>{{ item.title }}</span>
            <div class="price">{{ item.price }}azn</div>
       </div>
    </div>
</template>

<script>
    export default{
        name:"ProductCard",
        props:['item'],
        methods:{
            onClickBox(){
                this.$emit('onClickBox',this.item)
            }
        }
    }

</script>

<style scoped>
    .productCard{
        position: relative;
        cursor: pointer;
        border: 1px solid #d9dde0;
        overflow: hidden;
        width: 100%;
        background-color: #fff;
        border-radius: 20px;
    }

    .cardImage{
        width: 100%;
        object-fit: fill;
        margin-bottom: 16px;
    }

    .cardImage>img{
        width: 100%;
        height: 250px;
        border-top-left-radius:20px ;
        border-top-right-radius: 20px;
    }

    .desc{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #657282;
        padding: 8px;
        font-size: 12px;
        position: relative;
        max-height: 60px;
    }
    .price{
        margin-top: 4px;
        color: #1874ff;
        font-size: 24px;
        font-weight: 500;
    }
    .btn{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all .4s ease;
        background-color: #1874ff;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 500;
        transform: translateY(100px);
    }
    .productCard:hover>.desc>.btn{
        transform: translateY(0px);
    }

    .box{
        width: 24px;
        height: 24px;
        position: absolute;
        background-color: #fff;
        border: 1px solid #ff9b53;
        border-radius: 50%;
        top: 8px;
        right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxActive{
        background-color: #ff9b53;
        border: 1px solid #ff9b53;
        color: #fff;
    }
</style>
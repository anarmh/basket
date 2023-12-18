<template>

   <div class="previewCard">
    <div class="previewItem">
        <div class="image">
            <img src="" alt="">
        </div>
        <div class="content">
            <div class="title">title</div>
            <div class="price">10$</div>
        </div>
    </div>
   </div>
   <div class="total">
    Total:20$
   </div>
</template>

<script>
    export default{
    name:"BasketPreview",
}

</script>

<style scoped>previewCard
.previewCard{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #d9dde0;
    border-radius: 20px;
    padding: 20px;
}
.previewItem{
    display: flex;
}
.image{
    margin-right: 20px;
}
.image>img{
    width: 150px;
    height: auto;
    object-fit: fill;
}
.content{
    display: flex;
    flex-direction: column;
    font-weight: 500;
}
.price{
    margin-top: 8px;
    color: #1874ff;
    font-size: 24px;
    font-weight: 500;
}
.total{
    color: #374051;
    font-size: 32px;
    font-weight: 600;
}
</style>
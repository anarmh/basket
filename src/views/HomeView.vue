<template>

    <div class="filterWrapper">
        <div class="flex">
            <div @click="activeCategory=activeCategory===item ? '':item" 
            :class="activeCategory===item ? 'activeCategory':''"
            class="category"  v-for="item in categories" :key="item">{{ item }}</div>
        </div>
        <div class="order" @click="sortMode=sortMode==='asc'? 'desc':'asc'">
            Sirala {{ sortMode==="asc"?"A-Z":"Z-A" }}
        </div>
    </div>
    <div class="grid">
        
            <ProductCard @onClickBox="onClickBox($event)" v-for="item in data" :item="item" :key="item.id"/>
           
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default{
    name: "HomeView",
    created() {
        this.getAllCategories();
        this.getAllProducts();
    },
    methods: {
        onClickBox(data){
            alert(data)
        },
        getProductsByCategory(category) {
            fetch('https://fakestoreapi.com/products/category/' + category + "?sort=" + this.sortMode)
                .then(res => res.json())
                .then(json => {
                this.data = json;
            });
        },
        getAllCategories() {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(json => this.categories = json);
        },
        getAllProducts() {
            fetch('https://fakestoreapi.com/products?sort=' + this.sortMode)
                .then(res => res.json())
                .then(json => this.data = json);
        }
    },
    data() {
        return {
            categories: [],
            activeCategory: '',
            data: '',
            sortMode: "asc",
        };
    },
    watch: {
        sortMode() {
            if (this.activeCategory === "") {
                this.getAllProducts();
            }
            else {
                this.getProductsByCategory(this.activeCategory);
            }
        },
        activeCategory(newVal) {
            if (newVal === "") {
                this.getAllProducts();
            }
            else {
                this.getProductsByCategory(newVal.toLowerCase());
            }
        }
    },
    components: { ProductCard }
}

</script>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 20px;
}
.filterWrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}
.flex{
    display:flex ;
    align-items: center;
    gap: 20px;
}
.category{
    cursor: pointer;
    padding: 4px 16px;
    transition: all .5s;
    background-color: #fafafa;
    border: 1px solid #d9dde0;
    text-transform: uppercase;
    font-size: 12px;
    border-radius: 16px;
    font-weight: 500;
    margin-top: 8px;
}
.activeCategory{
    border: 1px solid;
    transition: all .5s;

}
.order{
    cursor: pointer;
}
</style>
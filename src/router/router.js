
import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetailView.vue'
import Basket from '../views/BasketPreviewView.vue'
const routes=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/product-detail/:id',
        component:ProductDetail
    },
    {
        path:'/basket-preview',
        component:Basket
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router
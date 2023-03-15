import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routers: [{
        // 根路径
        path: '/',
        component: ()=>import('../pages/myHome/MyHome')
    },{
        path: '/home',
        component: ()=>import('../pages/myHome/MyHome')
    },
    {
        path: '/cart',
        component: ()=>import('../pages/myCart/MyCart')
    },
    {
        path: '/order',
        component: ()=>import('../pages/myOrder/MyOrder')
    },
    {
        path: '/mine',
        component: ()=>import('../pages/mine/Mine')
    }]
})

export default router

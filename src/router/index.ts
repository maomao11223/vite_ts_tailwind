import { createRouter, createWebHistory } from "vue-router"; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/auth/login.vue"),
            meta: { title: "登入" }
        }, 
        {
            path: '/',
            component: () => import('@/layouts/default.vue'),
            children: [
                {
                    path: '',
                    name: 'Home',
                    component:()=>import ('@/views/officialWeb/home/home.vue')
            }
        ]
        },
        {
            path: '/dashboard',
            component: () => import("@/layouts/admin.vue"),
            meta: {
                breadcrumb:'後台'
            },
            children: [
                //後台首頁
                {
                    path: '',
                    name: 'dashboardHome',
                    component: () => import("@/views/dashboard/home/home.vue"),
                    
                },
                // todo管理
                {
                    path: 'manageTodo',
                    name: 'manageTodo',
                    component:()=>import('@/views/dashboard/todo/todoList.vue')
                }
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    // document.title = to.meta.title;
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (useAuthStore().loggedIn) { 
    //         next();
    //     } else {
    //         // console.log("🚀 ~ ", useAuthStore().loggedIn);
    //         if (to.path !== "/login") next("/login");
    //         else next();
    //     }
    // } else {
        next();
    // }
});

export default router;

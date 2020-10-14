export default {
    path:'/admin',
    component : () => import('@/views/Admin'),
    children:[
        {
            path:'movie',
            component : () => import('@/views/Admin/Movie.vue'),
            children:[
                {
                    path:'add',
                    component:() => import('@/components/Add')
                },
                {
                    path:'info',
                    component:() => import('@/components/Info')
                }
            ]
        },
        {
            path:'cinema',
            component : () => import('@/views/Admin/Cinema.vue')
        }
    ]
}
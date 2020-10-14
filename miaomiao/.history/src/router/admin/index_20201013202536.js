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
                    path:'delete',
                    component:() => import('@/components/Delete')
                },
                {
                    path:'change',
                    component:() => import('@/components/Change')
                },
                {
                    path:'find',
                    component:() => import('@/components/Find')
                }
            ]
        },
        {
            path:'cinema',
            component : () => import('@/views/Admin/Cinema.vue')
        }
    ]
}
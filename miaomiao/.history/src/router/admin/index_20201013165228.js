export default {
    path:'/admin',
    component : () => import('@/views/Admin'),
    children:[
        {
            path:'movie',
            component : () => import('@/views/Admin/Movie.vue')
        },
        {
            path:'cinema',
            component : () => import('@/views/Admin/Cinema.vue')
        }
    ]
}
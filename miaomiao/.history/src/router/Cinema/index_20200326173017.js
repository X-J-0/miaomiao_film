export default {
    path:'/cinema',
    component : () => import('@/views/Cinema'),
    children:[
        {
            path:'allocate',
            component:()=>import('@/components/AllCity')
        },
        {
            path:'brand',
            component:()=>import('@/components/Brand')
        },
        {
            path:'special',
            component:()=>import('@/components/Special')
        },
        {
            path:'/cinema',
            redirect:'/cinema/allocate'
        }
    ]
}
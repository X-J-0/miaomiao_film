export default {
    path:'/movie',
    component : () => import('@/views/Movie'),
    children:[
        {
            path:'city',
            component:()=>import('@components/City')
        },
    ]
}
export default {
    path:'/movie',
    component : () => import('@/views/Movie'),
    children:[
        {
            path:'city',
            component:()=>import('@components/City')
        },
        {
            path:'nowPlaying',
            component:()=>import('@components/City')
        },
        {
            path:'comingSoon',
            component:()=>import('@components/City')
        },
        {
            path:'search',
            component:()=>import('@components/City')
        },
    ]
}
const routers = [
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            {
                path: 'house',
                routes: [
                    {
                        path: 'rent',
                        routes: [
                            {
                                path: 'list',
                                component: '@/pages/rent',
                                mate: {
                                    title: '出租列表',
                                },
                            }
                        ],
                        mate: {
                            title: '房源出租',
                            isMenu: true,
                        },
                    },
                    {
                        path: 'sell',
                        routes: [
                            {
                                path: 'list',
                                component: '@/pages/sell',
                                mate: {
                                    title: '出售列表',
                                },
                            }
                        ],
                        mate: {
                            title: '房源出售',
                            isMenu: true,
                        },
                    }
                ],
                mate: {
                    title: '房源管理',
                    isMenu: true,
                },
            },
            {
                path: 'log',
                component: '@/pages/logmenu',
                mate: {
                    title: '操作日志',
                    isMenu: true,
                },
            },
            {
                path: '/',
                component: '@/pages/index'
            }
        ]
    },
    {
        path: '/table',
        component: '@/pages/table',
    },
    {
        path: '/modou',
        component: '@/pages/modou/index'
    }
]
export default routers

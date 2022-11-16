const routers = [
    {
        path: '/',
        component: '@/layouts/index',
        routes: [
            {
                path: 'components',
                routes: [
                    {
                        path: 'list',
                        component: '@/pages/rent',
                        mate: {
                            title: '列表',
                        },
                    },
                    {
                        path: 'table',
                        component: '@/pages/table',
                        mate: {
                            title: '表格',
                        },
                    },
                    {
                        path: 'vinput',
                        component: '@/pages/vinput',
                        mate: {
                            title: '虚拟输入框',
                        },
                    }
                ]
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

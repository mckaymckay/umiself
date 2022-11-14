

import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import styles from './index.less'
import FSBTMenu from '@/components/index';
import { useLocation } from 'umi';
interface IndexPageType {
    children: any,
    location: any,
    history: any
}

const layout = [
    {
        path: 'house',
        routes: [
            {
                path: 'rent',
                routes: [
                    {
                        path: 'list',
                        component: '@/pages/rentAndSell/list',
                        mate: {
                            title: '楼盘房源出租列表',
                        },
                    },
                    {
                        path: 'detail/:id',
                        component: '@/pages/rentAndSell/detail',
                        mate: {
                            title: '楼盘房源出租详情',
                        },
                    },
                    {
                        path: 'check/:id',
                        component: '@/pages/rentAndSell/detail',
                        mate: {
                            title: '楼盘房源查看详情',
                        },
                    },
                    {
                        path: 'new',
                        component: '@/pages/rentAndSell/detail',
                        mate: {
                            title: '楼盘房源出租详情',
                        },
                    },
                ],
                mate: {
                    title: '楼盘房源出租',
                    isMenu: true,
                },
            },
            {
                path: 'sell',
                routes: [
                    {
                        path: 'list',
                        component: '@/pages/rentAndSell/list',
                        mate: {
                            title: '楼盘房源出售列表',
                        },
                    },
                    {
                        path: 'new',
                        component: '@/pages/rentAndSell/detail',
                        mate: {
                            title: '楼盘房源出售详情',
                        },
                    },
                    {
                        path: 'detail/:id',
                        component: '@/pages/rentAndSell/detail',
                        mate: {
                            title: '楼盘房源出售详情',
                        },
                    },
                    {
                        path: 'check/:id',
                        component: '@/pages/rentAndSell/detail',
                        mate: {
                            title: '楼盘房源出售查看详情',
                        },
                    },
                ],
                mate: {
                    title: '楼盘房源出售',
                    isMenu: true,
                },
            },
            {
                path: 'co-working-house',
                routes: [
                    {
                        path: 'list',
                        component: '@/pages/coWorkingHouse/list',
                        mate: {
                            title: '联合办公列表',
                        },
                    },
                    {
                        path: 'detail/:id',
                        component: '@/pages/coWorkingHouse/detail',
                        mate: {
                            title: '联合办公详情',
                        },
                    },
                    {
                        path: 'check/:id',
                        component: '@/pages/coWorkingHouse/detail',
                        mate: {
                            title: '联合办公详情',
                        },
                    },
                    {
                        path: 'new',
                        component: '@/pages/coWorkingHouse/detail',
                        mate: {
                            title: '联合办公详情',
                        },
                    },
                ],
                mate: {
                    title: '联合办公房源',
                    isMenu: true,
                },
            },
        ],
        mate: {
            title: '房源管理',
            isMenu: true,
        },
    },
    {
        path: 'log',
        component: '@/pages/log',
        mate: {
            title: '操作日志',
            isMenu: true,
        },
    },
]
const layout1 = [
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

const formatMenu = () => {
    function generatorMenu(layout1: any) {
        return layout1.filter((route: any) => {
            if (route.routes?.length) {
                route.routes = generatorMenu(route.routes);
            }
            return route.mate?.isMenu;
        });
    }
    return generatorMenu(JSON.parse(JSON.stringify(layout)));
};


function IndexPage(props: IndexPageType) {
    const res = formatMenu()
    console.log(229, res)
    console.log(111)
    const location = useLocation()
    // useLocation()和props.location一样
    const [user, setUser] = useState('陶家乐112')
    console.log('branch3')
    console.log('branch2')
    console.log('main')
    console.log('branch4')
    return (
        <ConfigProvider>
            <div className={styles['fsbt-layout']}>
                <div className={styles['fsbt-header']}>
                    <div className={styles['fsbt-logo']}>58商办通</div>
                    <div className={styles['fsbt-user']}> 欢迎{user}</div>
                </div>
                <div className={styles['fsbt-content']}>
                    <div className={styles['content-left']}>
                        <FSBTMenu></FSBTMenu>
                    </div>
                    <div className={styles['content-right']}>{props.children}</div>
                </div>
            </div>

        </ConfigProvider>

    );
};

export default IndexPage;
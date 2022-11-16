import { T_Menu } from '@/interface/menu';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import routers from '@/routers/index'
import { useLocation } from 'umi';


// 递归routes
const formatRoute = () => {
    function generatorMenu(routers: T_Menu[]) {
        return routers.filter((route) => {
            if (route.routes?.length) {
                route.routes = generatorMenu(route.routes);
            }
            return route.mate?.isMenu;
        });
    }
    return generatorMenu(JSON.parse(JSON.stringify(routers)) as T_Menu[]);
}

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('出租和出售', '/sub1', <MailOutlined />, [
        getItem('出租', '/house/rent/list'),
        getItem('出售', '/house/sell/list'),
    ]),
    getItem('日志', '/log', <AppstoreOutlined />,),
];
const handleClickItem = (e: any) => {
    console.log(47, e)
}



function FSBTMenu() {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const location = useLocation()
    useEffect(() => {
        const menuData = formatRoute()
    }, [])

    const onOpenChange: MenuProps['onOpenChange'] = keys => {
        setOpenKeys(keys);
    };

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            // selectedKeys={selectKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
            onClick={(e) => handleClickItem(e)}
        />
    );
};
export default FSBTMenu;
import React, {Fragment} from "react";
import type {MenuProps} from 'antd'
import {Button, Menu} from 'antd'
import {BarsOutlined, BookFilled, DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons'
import './index.scss'


type MenuItem = Required<MenuProps>['items'][number]

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

const items:MenuItem[] = [
    getItem('漫画','1',<BarsOutlined />),
    getItem('游戏','2',<BookFilled />)
]

export default function Navigator(){

    const [collapsed, setCollapsed] = React.useState(false)

    const toggleCollapsed = ()=>{
        setCollapsed(!collapsed)
    }

    return (
        <Fragment>
            <Menu
                className='menu'
                style={{width: collapsed ? '80px' : '200px'}}
                defaultOpenKeys={['1']}
                theme='light'
                mode='inline'
                inlineCollapsed={collapsed}
                items={items}
            />
            <Button className='changeMenu' style={{width: collapsed ? '80px' : '200px'}} type='primary' onClick={toggleCollapsed}>
                {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            </Button>
        </Fragment>
    )
}

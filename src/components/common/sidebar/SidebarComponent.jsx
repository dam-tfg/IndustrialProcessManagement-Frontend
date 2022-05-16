/**
 * @author Alberto González
 *
 */
import { useEffect } from "react";
import { useCustom } from '../../../hook/app/useCustom';
import { Layout, Menu } from 'antd';
import {
    ShoppingCartOutlined,
    AppstoreAddOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../scss/SidebarComponent.module.scss';
import UserService from '../../../services/user/UserService';

const { Sider } = Layout;

export const SidebarComponent = () => {

    const { menuState } = useCustom();
    const navigate = useNavigate();

    const client = {
        key: 'order',
        icon: <ShoppingCartOutlined />,
        label: 'Pedidos',
        children: [
            {
                key: 'new-order',
                icon: <AppstoreAddOutlined />,
                label: 'Nuevo pedido',
                onClick: () => navigate('orders'),
            },
            {
                key: 'orders',
                icon: <UnorderedListOutlined />,
                label: 'Pedidos',
                onClick: () => navigate('scroll-page'),
            }
        ]
    };  
    
    return (
        <Sider trigger={null} collapsible collapsed={menuState} style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0,
            bottom: 0,
        }}>

            <div className={styles.headerLogo}>
                <Link to="/" id={styles.logo} 
                    className={menuState 
                        ? styles.toggle 
                        : styles.full} 
                />
            </div>
            <Menu /* TODO Menu */
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['orders']}
                items={[
                    {
                        key: 'order',
                        icon: <ShoppingCartOutlined />,
                        label: 'Pedidos',
                        children: [
                            (async () => await UserService.checkAuthorization("client")) && {
                                key: 'new-order',
                                icon: <AppstoreAddOutlined />,
                                label: 'Nuevo pedido',
                                onClick: () => navigate('orders'),
                            },
                            {
                                key: 'orders',
                                icon: <UnorderedListOutlined />,
                                label: 'Pedidos',
                                onClick: () => navigate('scroll-page'),
                            }
                        ]
                    }   
                ]}
            />
        </Sider>
    );
}
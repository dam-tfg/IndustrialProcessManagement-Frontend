/**
 * @author Alberto González
 *
 */
import { useAuth } from '../../hook/auth/useAuth';
import { useCustom } from '../../hook/app/useCustom';
import { Dropdown, Layout, Menu } from 'antd';
import { createElement, useState } from 'react';
import { DashboardOutlined, LogoutOutlined, 
    MenuFoldOutlined, 
    MenuUnfoldOutlined, 
    SettingOutlined, 
    UserOutlined 
} from '@ant-design/icons';
import { useQuery } from 'react-query';
import UserService from '../../services/user/UserService';
import { useNavigate } from 'react-router-dom';
import styles from '../../scss/components/common/HeaderComponent.module.scss';

const { Header } = Layout;

export const HeaderComponent = () => {
    
    const { isLogged, logout } = useAuth();
    const { menuState, toggleMenu } = useCustom();
    const navigate = useNavigate();
    
    const menu = (

        <Menu
            items={[
                { /* TODO Permisos por ROLE */
                    label: 'Admin',
                    key: '1',
                    icon: <DashboardOutlined/>,
                    onClick: () => navigate('admin')
                },
                {
                    label: 'Configuración',
                    key: '2',
                    icon: <SettingOutlined />,
                    onClick: () => navigate('settings')
                },
                isLogged && {
                    label: 'Salir',
                    key: '3',
                    danger: true,
                    icon: <LogoutOutlined/>,
                    onClick: () => logout()
                },
            ]}
        />
    );
    
    const { data: user, error, isLoading, isFetching } = useQuery(["current-user"], UserService.getCurrentUser);

    error && logout();

    return (
        <Header className="site-layout-background">
            {createElement(menuState ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleMenu,
            })}
            <Dropdown.Button 
                className={styles.dropdownUser}
                overlay = {menu}
                placement = "bottom" 
                icon = { <UserOutlined/> }
                loading={ isLoading || isFetching }
                onClick = {() => navigate("user/" + user?.username)}
            >
                {user?.name} {user?.surnames} {/* TODO Username */}
            </Dropdown.Button>
        </Header>
    );
}
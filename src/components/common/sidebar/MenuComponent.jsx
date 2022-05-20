/**
 * @author Alberto González
 *
 */
import {
    ShoppingCartOutlined,
    AppstoreAddOutlined,
    UnorderedListOutlined,
    BuildOutlined,
    ApartmentOutlined,
    SisternodeOutlined,
    FunnelPlotOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import UserService from '../../../services/user/UserService';
import { useMutation } from "react-query";
import { Menu } from 'antd';

export const MenuComponent = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const client = [{
        key: 'orders',
        icon: <ShoppingCartOutlined/>,
        label: 'Pedidos',
        children: [
            {
                key: 'orders-create',
                icon: <AppstoreAddOutlined/>,
                label: 'Nuevo pedido',
                onClick: () => navigate('/orders/create'),
            },
            {
                key: 'orders-orders',
                icon: <UnorderedListOutlined/>,
                label: 'Pedidos',
                onClick: () => navigate('/orders'),
            }
        ]
    }];

    const employee = [{
        key: 'production',
        icon: <ApartmentOutlined/>,
        label: 'Producción',
        children: [
            {
                key: 'production-line',
                icon: <SisternodeOutlined/>,
                label: 'Líneas',
                onClick: () => navigate('/production/line'),
            },
            {
                key: 'production-section',
                icon: <SisternodeOutlined/>,
                label: 'Secciones',
                onClick: () => navigate('/production/section'),
            },
            {
                key: 'production-process',
                icon: <SisternodeOutlined/>,
                label: 'Procesos',
                onClick: () => navigate('/production/process'),
            }
        ]
    },
    {
        key: 'components',
        icon: <BuildOutlined/>,
        label: 'Componentes',
        children: [
            {
                key: 'components-create',
                icon: <AppstoreAddOutlined/>,
                label: 'Nuevo componente',
                onClick: () => navigate('/components/create'),
            },
            {
                key: 'components-components',
                icon: <UnorderedListOutlined/>,
                label: 'Componentes',
                onClick: () => navigate('/components'),
            },
            {
                key: 'components-stock',
                icon: <FunnelPlotOutlined/>,
                label: 'Stock',
                onClick: () => navigate('/components/stock'),
            }
        ]
    }]

    var menu = [];

    const clientQuery = useMutation(UserService.checkAuthorization);
    const employeeQuery = useMutation(UserService.checkAuthorization);

    (!clientQuery.isSuccess & !clientQuery.isLoading) && clientQuery.mutate("client");
    (!employeeQuery.isSuccess & !employeeQuery.isLoading) && employeeQuery.mutate("employee");

    (clientQuery.isSuccess) && clientQuery.data && menu.push(...client);
    (employeeQuery.isSuccess) && employeeQuery.data && menu.push(...employee);

    const getMenuKeys = (keyType) => {

        let path = location.pathname.split("/");
        path.shift();

        switch (keyType) {
            case 0:
                return path.length === 1 ? path[0] : [...path];
            
            case 1:
                return [path.join('-')];

            default:
                return [];
        }
    }

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={getMenuKeys(1)}
            defaultOpenKeys={getMenuKeys(0)}
            items={menu}
        />
    );
}
/**
 * @author Alberto González
 *
 */
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import UserService from "../../services/user/UserService";
import styles from '../../scss/pages/admin/dashboard.module.scss';
import { Button, Card, Space, Tooltip } from "antd";
import { AppstoreOutlined, BellOutlined, SafetyOutlined, UserOutlined } from "@ant-design/icons";

export const Dashboard = () => {

    const { data: user, isLoading } = useQuery(["current-user"], UserService.getCurrentUser);

    const menu = [
        {
            key: '#general',
            title: 'General',
            icon: <AppstoreOutlined />
        },
        {
            key: 'accounts',
            title: 'Administración de cuentas',
            icon: <UserOutlined />
        },
        {
            key: '#notifications',
            title: 'Notificaciones',
            icon: <BellOutlined />
        },
        {
            key: '#security',
            title: 'Seguridad',
            icon: <SafetyOutlined />
        }
    ];

    return (
        <Card 
            title={`Bienvenido, ${user?.name} ${user?.surnames}`}
            loading={isLoading}
        >
            {menu.map(item => {
                return (
                    <Link to={item.key} key={item.key}>
                        <Tooltip title={item.title}>
                            <Card.Grid className={styles.gridStyle}>
                                <Space>
                                    <Button icon={item.icon} size="large" />
                                    {item.title}
                                </Space>
                            </Card.Grid>
                        </Tooltip>
                    </Link>
                );
            })}
        </Card>
    );
}
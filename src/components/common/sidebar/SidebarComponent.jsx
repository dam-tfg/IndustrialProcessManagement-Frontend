/**
 * @author Alberto González
 *
 */
import { useCustom } from '../../../hook/app/useCustom';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export const SidebarComponent = () => {

    const { menuState } = useCustom();
    const navigate = useNavigate();

    return (
        <Sider trigger={null} collapsible collapsed={menuState} style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0,
            bottom: 0,
          }}>
            
            <Link to="/">
                <div className="logo" style={{height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)'}}/> {/* TODO Logo App */}
            </Link>
            <Menu /* TODO Menu */
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                        onClick: () => navigate('scroll-page'),
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    );
}
/**
 * @author Alberto González
 *
 */
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Dropdown, Form, Input, Menu } from 'antd';
import { DownOutlined, LockOutlined, SlidersOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../hook/auth/useAuth';
import styles from '../../scss/components/auth/LoginComponent.module.scss';

export const LoginComponent = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const login = async (values) => {

        const { username: usernameOrEmail, password } = values;

        auth.login({ usernameOrEmail, password });
        navigate(location.state?.from || "/admin");
    }

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: 'Administrador',
                    icon: <UserOutlined/>,
                    onClick: () => {
                        setUsername("administrator");
                        setPassword("administrator-demo");
                    }
                },
                {
                    key: '2',
                    label: 'Usuario',
                    icon: <UserOutlined/>,
                    onClick: () => {
                        setUsername("user1");
                        setPassword("user-demo");
                    }
                },
                {
                    key: '3',
                    label: 'Cliente',
                    icon: <UserOutlined/>,
                    onClick: () => {
                        setUsername("client");
                        setPassword("client-demo");
                    }
                },
                {
                    key: '4',
                    label: 'Empleado',
                    icon: <UserOutlined/>,
                    onClick: () => {
                        setUsername("employee");
                        setPassword("employee-demo");
                    }
                },
                {
                    key: '5',
                    label: 'Empresa 1',
                    icon: <SlidersOutlined/>,
                    onClick: () => {
                        setUsername("company1");
                        setPassword("company-demo");
                    }
                },
                {
                    key: '6',
                    label: 'Empresa 2',
                    icon: <SlidersOutlined/>,
                    onClick: () => {
                        setUsername("company2");
                        setPassword("company-demo");
                    }
                },
                {
                    key: '7',
                    label: 'Empresa 3',
                    icon: <SlidersOutlined/>,
                    onClick: () => {
                        setUsername("company3");
                        setPassword("company-demo");
                    }
                },
            ]}
        />
    );

    return (
        <Form name="normal_login"
            className="login-form"
            fields={[
                {
                    name: ['username'],
                    value: username,
                },
                {
                    name: ['password'],
                    value: password,
                }
            ]}
            initialValues={{
                remember: true,
            }}
            style={{
                width: '25rem'
            }}
            onFinish={login}
        >
            <Form.Item name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
        
            <Form.Item name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link to="/forgot-password" className="login-form-forgot">
                    Forgot password
                </Link>
            </Form.Item>

            <Form.Item>
                <Button loading={auth.isLoading} type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
            <div className={styles.floatSelector}>
                <Dropdown.Button
                    type="primary"
                    icon={<DownOutlined />}
                    overlay={menu}
                >
                    {username || 'Seleccione el usuario'}
                </Dropdown.Button>
            </div>
        </Form>
    );
}
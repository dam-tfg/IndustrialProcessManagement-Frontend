/**
 * @author Alberto González
 *
 */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Spin, Tooltip } from 'antd';
import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../hook/auth/useAuth';
import { Header } from 'antd/lib/layout/layout';
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

    return (
        <Form name="normal_login"
            className="login-form"
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
                <Input prefix={ <UserOutlined className="site-form-item-icon"/> } 
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
                    prefix={ <LockOutlined className="site-form-item-icon"/> }
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
        </Form>
    );
}
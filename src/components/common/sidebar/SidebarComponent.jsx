/**
 * @author Alberto González
 *
 */
import { useCustom } from '../../../hook/app/useCustom';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../../../scss/components/common/SidebarComponent.module.scss';
import { MenuComponent } from "./MenuComponent";

const { Sider } = Layout;

export const SidebarComponent = () => {

    const { menuState } = useCustom();
    
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
            <MenuComponent/>
        </Sider>
    );
}
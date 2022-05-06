/**
 * @author Alberto González
 *
 */
import logo from '../../image/logo.png';
import { Outlet } from "react-router-dom";
import styles from '../../scss/pages/auth/auth.module.scss';

export const Auth = () => {

    return (
        <header className={styles.loginHeader}>
            <img src={logo} className="App-logo" alt="logo" />
            <Outlet/>
        </header>
    );
}
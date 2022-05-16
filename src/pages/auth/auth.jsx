/**
 * @author Alberto González
 *
 */
import logo from '../../image/logo.png';
import { Link, Outlet } from "react-router-dom";
import styles from '../../scss/pages/auth/auth.module.scss';

export const Auth = () => {

    return (
        <header className={styles.loginHeader}>
            <Link to="/" id={styles.logo}/>
            <Outlet/>
        </header>
    );
}
/**
 * @author Alberto González
 *
 */
import { NavLink } from "react-router-dom";
import { useCustom } from "../../../hook/app/useCustom";

export const NavItem = ({ to, icon, text, styles }) => {
    
    const { menuState } = useCustom();

    return (
        <li className={styles.navMenuItem}>
            <NavLink to={to}
                className={({isActive}) => isActive 
                                    ? `${styles.navMenuLink} ${styles.activeLink}`
                                    : `${styles.navMenuLink}`}>
                {icon}
                <div className={(menuState ? styles.openSidebar : styles.hiddenSidebar)}>
                    {text}
                </div>
            </NavLink>
        </li>
    );
}
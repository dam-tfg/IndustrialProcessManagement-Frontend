/**
 * @author Alberto González
 *
 */
import { Outlet } from "react-router-dom";
import { HeaderTestAuth } from "../testComponents/headerTestAuth";

export const Welcome = () => {
    
    return (
        <>
            <h1>Bienvenido!</h1>
            <HeaderTestAuth/>
            <Outlet/>
        </>
    );
}

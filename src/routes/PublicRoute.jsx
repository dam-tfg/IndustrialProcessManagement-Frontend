/**
 * @author Alberto González
 *
 */
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/auth/useAuth";
import { Auth } from "../pages/auth/Auth";

export const PublicRoute = () => {

    const auth = useAuth();
    
    return (
        !auth.isLogged() 
            ? <Auth/> 
            : <Navigate
                replace
                to={"/"}
            />
    );
}
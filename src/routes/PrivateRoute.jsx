/**
 * @author Alberto González
 *
 */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/auth/useAuth";

export const PrivateRoute = ({element}) => {

    const auth = useAuth();
    const location = useLocation();
    
    return (
        auth.isLogged() 
            ? element
            : <Navigate
                replace
                to={"/auth/login"}
                state={ { from: location } }
            />
    );
}
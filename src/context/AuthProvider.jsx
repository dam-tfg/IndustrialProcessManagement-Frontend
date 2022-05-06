/**
 * @author Alberto González
 *
 */
import { createContext, useEffect, useState } from "react"
import { useMutation } from "react-query";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import UserService from "../services/user/UserService";
import { ACCESS_TOKEN, USER_DETAILS } from "../util/constants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const { mutate, error, isLoading, isSuccess } = useMutation(UserService.login);

    const [token, setToken] = useState(
        localStorage.getItem(ACCESS_TOKEN) || null
    );

    const [payload, setPayload] = useState();

    const [userDetails, setUserDetails] = useState();

    useEffect(() => {

        try {
            
            if (token !== "") {
                
                localStorage.setItem(ACCESS_TOKEN, token);
                setUserDetails(payload);
            }
            
            if(!token) {
                
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(USER_DETAILS);
                <Navigate to="/auth/login"/>
            }

        } catch (error) {

            localStorage.removeItem(ACCESS_TOKEN);
            localStorage.removeItem(USER_DETAILS);
            console.log("AuthProvider useEffect:", error);
        }
    }, [token, payload, userDetails]);

    useEffect(() => {
        
        /* localStorage.setItem(USER_DETAILS, JSON.stringify(userDetails)); */
        /* userDetails && console.log(Object.values(userDetails)); */    

    }, [userDetails]);

    const isTokenExpired = () => {
        
        try {
            return (payload.exp < (Date.now() / 1000))         
                    ? true
                    : false

        } catch (err) {

            return false;
        }
    }

    const contextValue = {
        token,

        login(userLogin) {
            
            mutate(userLogin, {

                onSuccess: (token) => {
                    setToken(token?.accessToken);
                    setPayload(jwt_decode(token?.accessToken));
                },
                onError: (error) => {
                    console.log("AuthProvider: ", error);
                }
            });

            setToken();
        },
        logout() {

            setToken(null);
            UserService.logout();
        }, 
        isLogged() {

            return !!token && !isTokenExpired();
        },
        getUserDetails() {

            return !!userDetails;
        },
        error,
        isLoading,
        isSuccess
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
/**
 * @author Alberto González
 *
 */

import { API_BASE_URL, AUTH_PATH, USER_DETAILS } from "../../util/constants";
import { axiosInstance } from "../util/axiosIntance";

class UserService { 

    login = async (userLogin) => {
        
        const { data } = await axiosInstance.post(AUTH_PATH + "/login", userLogin);
        
        return data;
    }

    signup = async (userSignup) => {

        const { data } = await axiosInstance.post(AUTH_PATH + "/signup", userSignup);

        return data;
    }

    getCurrentUser = async () => {

        const { data } = await axiosInstance.get(API_BASE_URL + "/user/me");
        
        return data;
    }

    getUser = async (username) => {

        const { data } = await axiosInstance.get(API_BASE_URL + "/user/" + username);

        return data;
    }

    logout() {
        
        localStorage.clear();
    }

}

export default new UserService();
/**
 * @author Alberto González
 *
 */

import axios from 'axios';
import { ACCESS_TOKEN, API_BASE_URL } from "../../util/constants";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
    }
})

axiosInstance.interceptors.request.use( function(config) {

    if (localStorage.getItem(ACCESS_TOKEN)) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
    }
 
    return config;
 
}, function(error) {
     
    return Promise.reject(error);
});
 
axiosInstance.interceptors.response.use( function(response) {
     
    if(response.status === 401) {
 
        alert("You are not authorized");
    }
    // TODO set more errors
    return response;
 
}, function (error) {
     
    return Promise.reject(error);
});
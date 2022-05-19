/**
 * @author Alberto González
 *
 */

 import { COMPANY_PATH } from "../../util/constants";
 import { axiosInstance } from "../util/axiosIntance";
 
 class CompanyService { 
 
     getCompany = async (username) => {
         
         const { data } = await axiosInstance.get(COMPANY_PATH + "/" + username);
         
         return data;
     }
 
     getAllCompanies = async () => {
 
         const { data } = await axiosInstance.get(COMPANY_PATH + "/all");
 
         return data;
     }
 
 }
 
 export default new CompanyService();
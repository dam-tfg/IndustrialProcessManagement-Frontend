/**
 * @author Alberto González
 *
 */

import { PERSON_PATH } from "../../util/constants";
import { axiosInstance } from "../util/axiosIntance";

class PersonService { 

    getPerson = async (username) => {
        
        const { data } = await axiosInstance.get(PERSON_PATH + "/" + username);
        
        return data;
    }

}

export default new PersonService();
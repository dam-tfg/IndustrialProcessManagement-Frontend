/**
 * @author Alberto González
 *
 */
import { useContext } from "react";
import { CustomContext } from "../../context/CustomProvider";

export const useCustom = () => {

    return useContext(CustomContext);
}
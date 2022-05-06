/**
 * @author Alberto González
 *
 */
import { createContext, useEffect, useReducer, useState } from "react";
import { MENU_STATE } from "../util/constants";

const CustomContext = createContext();

const CustomProvider = ({ children }) => {

    const [ menuState, toggle ] = useReducer(parameter => !parameter, 
        JSON.parse(localStorage.getItem(MENU_STATE) || true)
    );

    const [ modal, setModal ] = useState(false);

    useEffect(() => {
        
        try {

            localStorage.setItem(MENU_STATE, menuState);

        } catch (error) {

            localStorage.removeItem(MENU_STATE);
            alert(error);
        }

    }, [menuState]);

    const contextValue = {
        menuState,
        toggleMenu() {
            toggle();
        },
        modal,
        setModal(state) {
            setModal(state);
        }
    }

    return (
        <CustomContext.Provider value={contextValue}>
            {children}
        </CustomContext.Provider>
    );
}

export { CustomContext, CustomProvider };
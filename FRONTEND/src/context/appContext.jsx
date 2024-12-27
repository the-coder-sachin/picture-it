import { createContext, useState} from "react";

export const appContext = createContext()

const appContextProvider = (props)=>{
    const [user, setUser] = useState(false);
    const [loginPopup, setLoginPopup] = useState(false)

    const value = {
        user,
        setUser,
        loginPopup,
        setLoginPopup,
    }
    return (
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )
}

export default appContextProvider;
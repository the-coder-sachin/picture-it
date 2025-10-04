import axios from "axios";
import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const appContext = createContext()

const appContextProvider = (props)=>{

    const [user, setUser] = useState(null);
    const [loginPopup, setLoginPopup] = useState(false)
    const [credit, setCredit] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    
    const navigate = useNavigate()

    const backendURL = import.meta.env.VITE_BACKEND_URL

    const loadCreditBalance = async ()=>{
        if(token){
            try {
              const { data } = await axios.get(
                backendURL + "/api/user/credits",
                { headers: { token } }
              );

              if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
              }
            } catch (error) {
              console.log(error);
              toast.error(error.message);
            }
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        toast.info('successfully logout')
    }

    const generateImage = async(prompt)=>{
        try {
            const {data} = await axios.post(backendURL+'/api/image/generate-image', {prompt}, {headers:{token}})
            
            if(data.success){
                loadCreditBalance()
                return data.resultImage;
            }else{
                toast.error(data.message)
                loadCreditBalance()
                if(data.creditBalance == 0){
                    navigate("/buy-credit");
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(token){
            loadCreditBalance()
        }
    },[token])

    const value = {
      user,
      setUser,
      loginPopup,
      setLoginPopup,
      backendURL,
      credit,
      setCredit,
      token,
      setToken,
      loadCreditBalance,
      logout,
      generateImage,
    };
    return (
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )
}

export default appContextProvider;
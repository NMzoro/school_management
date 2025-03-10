import { createContext, useContext, useState } from "react";

export const UserStateContext = createContext(null)
export default function UserContext({children}){
    const[user,setUser] = useState('Yassine')
    const[authenticated,_setAuthenticated] = useState('true'===window.localStorage.getItem('AUTHENTICATED'))
    const logout = ()=>{
        setUser({})
        setAuthenticated(false)
       }
    const setAuthenticated =(isAuthenticated)=>{
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem('AUTHENTICATED', isAuthenticated);
    }
    return(
        <>
            <UserStateContext.Provider value={{
                user,
                authenticated,
                setAuthenticated,
                setUser,logout
            }}>
                {children}
            </UserStateContext.Provider>
        </>
    )
}
export const useUserContext = ()=> useContext(UserStateContext)
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState('willow')

    // reading login state from local storage
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("auth") === 'true'
        if (isLoggedIn) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    })

    

    return (
        <AuthContext.Provider value={{name,setName}}>
            {children}
        </AuthContext.Provider>
    )
}
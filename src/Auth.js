import React, { useState, useEffect } from "react";
import config from "./firebase/config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        config.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false)
        })
    })

    if (loading) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
import { useState } from "react";
import { userContext } from "./UserContext";

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    const login = (user) => {
        setIsAuthenticated(true)
        setUser(user)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser(null)
    }

    const value = { isAuthenticated, user, login, logout }
    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    )
}


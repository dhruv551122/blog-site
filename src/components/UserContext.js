import { createContext } from "react";

export const userContext = createContext({
    userAuthenticated: false,
    user: null,
    login: () => { },
    logout: () => { }
})
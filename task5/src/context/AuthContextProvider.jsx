import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(() => {
        const storedLocal = localStorage.getItem("isLogged")
        return storedLocal === "true";
    });

    useEffect(() => {
        localStorage.setItem("isLogged", isLogged);
    }, [isLogged]);

    const login = () => {
        setIsLogged(true);
    }

    const logout = () => {
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider
            value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
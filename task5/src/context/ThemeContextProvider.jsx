import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

export const ThemeContextProvider = ({children}) => {
    const [currTheme, setCurrTheme] = useState("light");
    
    const toggleTheme = () => {
        setCurrTheme( temp => temp === "light" ? "dark" : "light");
    };

    return(
        <ThemeContext.Provider
        value={{currTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
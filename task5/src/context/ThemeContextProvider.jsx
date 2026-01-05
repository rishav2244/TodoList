import { ThemeContext } from "./ThemeContext";
import { useContext, useState } from "react";

export const ThemeContextProvider = ({children}) => {
    const [currTheme, setCurrTheme] = useState("light");
    
    const toggleTheme = () => {
        setCurrTheme( temp === "light" ? "dark" : "light");
    };
}
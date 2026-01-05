import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Footer = () => {
  const { currTheme } = useContext(ThemeContext);

  return (
    <footer className={`app-footer ${currTheme}`}>
      <p>&copy; 2025 Task Tracker. All rights reserved.</p>
    </footer>
  );
};

import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLogged, logout } = useContext(AuthContext);
  const { currTheme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div>
      <header className={`app-header ${currTheme}`}>
        <h1>Task Tracker</h1>

        <button type="button" onClick={toggleTheme}>
          {currTheme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </header>

      {isLogged && (
        <button
          type="button"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Log out
        </button>
      )}
    </div>
  );
};

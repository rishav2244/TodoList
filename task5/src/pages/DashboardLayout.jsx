import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./DashboardLayout.css";

export const DashboardLayout = () => {
  const { currTheme } = useContext(ThemeContext);

  return (
    <div className={`dashboard ${currTheme}`}> {/* optional if you want the theme on the whole layout */}

      <div className={`sidebar ${currTheme}`}>
        <h2>Dashboard</h2>

        <NavLink
          to="tasks"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Tasks
        </NavLink>

        <NavLink
          to="profile"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Profile
        </NavLink>

        <NavLink
          to="logs"
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Logs
        </NavLink>
      </div>

      <div className={`content ${currTheme}`}>
        <Outlet />
      </div>
    </div>
  );
};

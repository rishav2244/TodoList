import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

export const DashboardLayout = () => {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>Dashboard</h2>

        <NavLink
          to="tasks" //Btw this causes routing
          className={({ isActive }) => isActive ? "active-link" : ""} //This is mainly for CSS purposes via classname assignment.
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

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

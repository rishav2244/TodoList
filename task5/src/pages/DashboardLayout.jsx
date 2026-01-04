import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

export const DashboardLayout = () => {
  return (
    <div className="dashboard">

      <aside className="sidebar">
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
      </aside>

      {/* Main content */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

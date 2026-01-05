import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import { TaskAdd } from "./pages/TaskAdd";
import { TaskDetails } from "./pages/TaskDetails";
import { Login } from "./pages/Login";

import { DashboardLayout } from "./pages/DashboardLayout";
import { DashboardTasks } from "./pages/DashboardTasks";
import { UserProfile } from "./pages/UserProfile";
import { DashboardLogs } from "./pages/DashboardLogs";

import { AuthContextProvider } from "./context/AuthContextProvider";
import { ThemeContextProvider } from "./context/ThemeContextProvider";
import { ThemeContext } from "./context/ThemeContext";

import { useContext } from "react";

const ThemedAppShell = ({ children }) => {
  const { currTheme } = useContext(ThemeContext);
  return <div className={`app-root ${currTheme}`}>{children}</div>;
};

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <ThemedAppShell>
          <Router>
            <Header />

            <Routes>
              <Route path="/login" element={<Login />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Navigate to="/dashboard/tasks" replace />} />

                <Route path="/dashboard" element={<DashboardLayout />}>
                  <Route path="tasks" element={<DashboardTasks />} />
                  <Route path="tasks/add-task" element={<TaskAdd />} />
                  <Route path="tasks/:id" element={<TaskDetails />} />
                  <Route path="profile" element={<UserProfile />} />
                  <Route path="logs" element={<DashboardLogs />} />
                </Route>
              </Route>
            </Routes>

            <Footer />
          </Router>
        </ThemedAppShell>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;

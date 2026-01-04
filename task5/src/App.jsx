// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { useState } from 'react'
// import './App.css'
// import { TaskList } from './pages/TaskList'
// import { Header } from './components/Header'
// import { Footer } from './components/Footer'
// import { TaskAdd } from './pages/TaskAdd'
// import { TaskDetails } from './pages/TaskDetails'
// import { Login } from './pages/Login'
// import ProtectedRoute from './components/ProtectedRoute'
// import { AuthContextProvider } from './context/AuthContextProvider'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <AuthContextProvider>
//       <Router>
//         <Header></Header>
//         <Routes>
//           <Route
//             path='/login'
//             element={<Login></Login>}
//           />
//           <Route
//             element={<ProtectedRoute></ProtectedRoute>}>
//             <Route
//               path='/'
//               element={<Navigate to="/tasks" replace />}
//             />
//             <Route
//               path='/tasks'
//               element={<TaskList />}></Route>
//             <Route
//               path='/tasks/add-task'
//               element={<TaskAdd />}></Route>
//             <Route
//               path='/tasks/:id'
//               element={<TaskDetails />}></Route>
//           </Route>
//         </Routes>
//         <Footer />
//       </Router>
//     </AuthContextProvider>
//   )
// }

// export default App

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

import { AuthContextProvider } from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
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
            </Route>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;

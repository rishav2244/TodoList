import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { TaskList } from './pages/TaskList'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TaskAdd } from './pages/TaskAdd'
import { TaskDetails } from './pages/TaskDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route
          path='/'
          element={<Navigate to="/tasks" replace/>}
        />
        <Route
          path='/tasks'
          element={<TaskList />}></Route>
        <Route
          path='/tasks/add-task'
          element={<TaskAdd />}></Route>
        <Route
        path='/tasks/:id'
        element={<TaskDetails/>}></Route>
      </Routes>
      <Footer />
    </Router>

    // <div>
    //   <h1>Task Tracker</h1>
    //   <TaskList />
    // </div>
  )
}

export default App

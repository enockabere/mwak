/** @format */

import "./App.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BaseLayout from "./layout/BaseLayout"
import MainLayout from "./layout/MainLayout"
import {Dashboard, PageNotFound, Login} from "./screens"
import LeavePlanner from './screens/planner/LeavePlanner'

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Login />} /> 
          </Route>

          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leave-planner" element={<LeavePlanner />} />
            <Route path="*" element={<PageNotFound />} /> 
          </Route>
        </Routes>
      </Router>
  )
}

export default App

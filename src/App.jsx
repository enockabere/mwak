/** @format */

import {useContext, useEffect} from "react"
import "./App.scss"
import {ThemeContext, ThemeProvider} from "./context/ThemeContext"
import {DARK_THEME, LIGHT_THEME} from "./constants/themeConstants"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MoonIcon from "./assets/icons/moon.svg"
import SunIcon from "./assets/icons/sun.svg"
import BaseLayout from "./layout/BaseLayout"
import MainLayout from "./layout/MainLayout"
import {Dashboard, PageNotFound, Login} from "./screens"
import LeavePlanner from './screens/planner/LeavePlanner'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  // Apply dark-mode class to body when theme is dark
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [theme])

  return (
    <ThemeProvider>
      {" "}
      {/* Wrap entire app in ThemeProvider */}
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Login />} /> {/* Login as default page */}
          </Route>

          <Route element={<BaseLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leave-planner" element={<LeavePlanner />} />
            <Route path="*" element={<PageNotFound />} /> {/* Catch unknown routes */}
          </Route>
        </Routes>

        <button
          type='button'
          className='theme-toggle-btn'
          onClick={toggleTheme}
        >
          <img
            className='theme-icon'
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
            alt='theme toggle icon'
          />
        </button>
      </Router>
    </ThemeProvider>
  )
}

export default App

/** @format */

import {createContext, useState, useEffect} from "react"
import PropTypes from "prop-types"
import {DARK_THEME, LIGHT_THEME} from "../constants/themeConstants"

export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {
  const storedTheme = window.localStorage.getItem("themeMode") || LIGHT_THEME
  const [theme, setTheme] = useState(storedTheme)

  useEffect(() => {
    window.localStorage.setItem("themeMode", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className={theme === DARK_THEME ? "dark-mode" : ""}>{children}</div>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

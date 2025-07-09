import { useState, useEffect } from "react"
import { ThemeContext } from "./useTheme"

type ThemeMode = "light" | "dark"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("theme")
    return (saved as ThemeMode) || "dark"
  })

  useEffect(() => {
    localStorage.setItem("theme", themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

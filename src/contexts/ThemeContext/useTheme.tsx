import { createContext, useContext } from "react"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

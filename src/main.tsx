import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { registerChartJS } from "./chart.ts"
import { AuthProvider } from "./contexts/AuthContext/index.ts"
import "@ant-design/v5-patch-for-react-19"
import { BrowserRouter } from "react-router"
import { AppRoutes } from "./routes/AppRoutes.tsx"
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext.tsx"

registerChartJS()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)

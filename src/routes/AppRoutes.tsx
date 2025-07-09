import { Routes, Route, Navigate } from "react-router"
import AuthPage from "../pages/AuthPage"
import { PrivateRoute } from "../components/guards/PrivateRoute"
import WeatherApp from "../pages/WeatherApp"
import { useAuthContext } from "../contexts/AuthContext/useAuthContext"
import { ROUTES } from "../constant/routes"
import { ErrorPage } from "../pages/ErrorPage"
import { useTheme } from "../contexts/ThemeContext/useTheme"
import { theme } from "antd"
import { ConfigProvider } from "antd"

export const AppRoutes = () => {
  const { isLoggedIn } = useAuthContext()
  const { themeMode } = useTheme()

  const themeAlgorithm =
    themeMode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm

  return (
    <ConfigProvider
      theme={{
        algorithm: themeAlgorithm,
      }}
    >
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            isLoggedIn ? (
              <Navigate to={ROUTES.WEATHER} replace />
            ) : (
              <AuthPage mode='signin' />
            )
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            isLoggedIn ? (
              <Navigate to={ROUTES.WEATHER} replace />
            ) : (
              <AuthPage mode='signup' />
            )
          }
        />

        <Route
          path={ROUTES.WEATHER}
          element={
            <PrivateRoute>
              <WeatherApp />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        <Route path='*' element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </ConfigProvider>
  )
}

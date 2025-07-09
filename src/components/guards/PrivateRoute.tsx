import type { ReactNode } from "react"
import { Navigate } from "react-router"
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext"
import { ROUTES } from "../../constant/routes"

interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn, isLoggingOut } = useAuthContext()

  if (isLoggingOut && !isLoggedIn) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.ERROR} replace />
  }

  return <>{children}</>
}

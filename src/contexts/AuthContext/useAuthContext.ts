import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import type { AuthAction } from "./types"
import { ROUTES } from "../../constant/routes"
import { useNavigate } from "react-router"

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth должен использоваться внутри AuthProvider")
  }

  const { state, dispatch } = context
  const navigate = useNavigate()

  const login = (name: string, token: string) => {
    localStorage.setItem("userToken", token)
    const action: AuthAction = {
      type: "LOGIN",
      payload: { name, token },
    }
    dispatch(action)
  }

  const logout = () => {
    dispatch({ type: "IS_LOGOUT", payload: { isLoggingOut: true } })

    localStorage.removeItem("userToken")

    dispatch({ type: "LOGOUT" })

    navigate(ROUTES.HOME, { replace: true })
  }

  const resetLogout = () => {
    dispatch({ type: "IS_LOGOUT", payload: { isLoggingOut: false } })
  }

  return {
    login,
    logout,
    resetLogout,
    isLoggedIn: state.isLoggedIn,
    isLoggingOut: state.isLoggingOut,
    token: state.token,
    name: state.name,
  }
}

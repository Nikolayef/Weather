import { createContext, useReducer } from "react"
import type { ReactNode, Dispatch } from "react"
import type { AuthState, AuthAction } from "./types"
import { authReducer } from "./reducer"

const initialState: AuthState = {
  name: "",
  token: null,
  isLoggedIn: false,
  isLoggingOut: false,
}

const AuthContext = createContext<{
  state: AuthState
  dispatch: Dispatch<AuthAction>
}>({
  state: initialState,
  dispatch: () => undefined,
})

const getStoredToken = (): string | null => {
  try {
    return localStorage.getItem("userToken")
  } catch {
    return null
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    const storedToken = getStoredToken()

    try {
      if (storedToken) {
        const name = atob(storedToken).split(":")[0]
        return {
          ...initialState,
          token: storedToken,
          name,
          isLoggedIn: true,
        }
      }
    } catch {
      // игнор
    }

    return initialState
  })

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }

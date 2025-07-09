import type { AuthState, AuthAction } from "./types"

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        isLoggedIn: true,
        isLoggingOut: false,
      }
    case "IS_LOGOUT":
      return {
        ...state,
        isLoggingOut: action.payload.isLoggingOut,
      }
    case "LOGOUT":
      return {
        ...state,
        name: "",
        token: null,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

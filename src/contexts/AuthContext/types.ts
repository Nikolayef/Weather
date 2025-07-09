export interface AuthState {
  name: string
  token: string | null
  isLoggedIn: boolean
  isLoggingOut: boolean
}

export type AuthAction =
  | {
      type: "LOGIN"
      payload: { name: string; token: string }
    }
  | { type: "LOGOUT" }
  | { type: "IS_LOGOUT"; payload: { isLoggingOut: boolean } }

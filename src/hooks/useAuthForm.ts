import { useAuthContext } from "../contexts/AuthContext/useAuthContext"
import { useNavigate } from "react-router"
import { usersApi } from "../services/usersApi"

export const useAuthForm = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()

  const handleSubmitSignIn = (values: {
    username: string
    password: string
  }) => {
    const { success, message } = usersApi.login(
      values.username,
      values.password
    )

    if (!success) {
      return message
    }
    // Генерируем JWT токен
    const token = btoa(`${values.username}:${Date.now()}`)

    login(values.username, token)
    navigate("/weather", { replace: true })
  }

  const handleSubmitSignUp = (values: {
    username: string
    password: string
  }) => {
    // Генерируем JWT токен
    const token = btoa(`${values.username}:${Date.now()}`)

    const { success, message } = usersApi.register(
      values.username,
      values.password
    )

    if (!success) {
      return message
    }
    login(values.username, token)
    navigate("/weather", { replace: true })
  }

  return { handleSubmitSignIn, handleSubmitSignUp }
}

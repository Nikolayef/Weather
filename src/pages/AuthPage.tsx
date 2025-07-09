import { Layout } from "antd"
import { useNavigate } from "react-router"
import AuthForm from "../components/AuthForm/AuthForm"
import { useEffect } from "react"
import { useAuthContext } from "../contexts/AuthContext/useAuthContext"

interface AuthPageProps {
  mode: "signin" | "signup"
}

function AuthPage({ mode }: AuthPageProps) {
  const navigate = useNavigate()
  const { resetLogout } = useAuthContext()

  useEffect(() => {
    // сбросить флаг выхода
    resetLogout()
  }, [])

  const config = {
    signin: {
      title: "Вход в систему",
      submitButtonText: "Войти",
      linkText: "Зарегистрироваться",
      linkAction: () => navigate("/signup", { replace: true }),
    },
    signup: {
      title: "Регистрация",
      submitButtonText: "Зарегистрироваться",
      linkText: "Вернуться к входу",
      linkAction: () => navigate("/", { replace: true }),
    },
  }

  const currentConfig = config[mode]

  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AuthForm
        mode={mode}
        title={currentConfig.title}
        submitButtonText={currentConfig.submitButtonText}
        linkText={currentConfig.linkText}
        linkAction={currentConfig.linkAction}
      />
    </Layout>
  )
}

export default AuthPage

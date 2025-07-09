import { useNavigate } from "react-router"
import { ROUTES } from "../constant/routes"

import { Layout, Typography, Button } from "antd"

export const ErrorPage = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(ROUTES.HOME)
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Typography.Title>403</Typography.Title>
        <Typography.Title>Доступ запрещён</Typography.Title>
        <Typography.Text>
          Для доступа к этой странице необходимо войти в систему.
        </Typography.Text>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleGoBack}>Вернуться на главную</Button>
        </div>
      </div>
    </Layout>
  )
}

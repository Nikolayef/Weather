import { Layout, Button, Typography } from "antd"
import styles from "./Header.module.scss"
import { useTheme } from "../../contexts/ThemeContext/useTheme"
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext"
import { useNavigate } from "react-router"
import { ROUTES } from "../../constant/routes"

const { Header: AntHeader } = Layout

export function Header() {
  const { logout, name } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(ROUTES.HOME, { replace: true })
  }
  const { toggleTheme, themeMode } = useTheme()

  return (
    <AntHeader className={styles.header}>
      <Typography.Title level={3} className={styles.title}>
        Погода
      </Typography.Title>
      <div className={styles.right}>
        <Typography.Title level={4}>Привет, {name}</Typography.Title>
        <Button type='primary' onClick={toggleTheme}>
          {themeMode === "dark" ? "Светлая тема" : "Тёмная тема"}
        </Button>
        <Button type='primary' danger onClick={handleLogout}>
          Выйти
        </Button>
      </div>
    </AntHeader>
  )
}

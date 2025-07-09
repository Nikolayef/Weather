import { Layout } from "antd"
import { Header } from "../components/Header/Header"
import { Dashboard } from "../components/Dashboard/Dashboard"

function WeatherApp() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Dashboard />
    </Layout>
  )
}

export default WeatherApp

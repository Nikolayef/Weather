import { Alert, Layout, Spin, Typography, Select } from "antd"
import { useGetWeather } from "../../hooks/useGetWeather"
import { ChartTemperature } from "../ChartTemperature/ChartTemperature"
import styles from "./Dashboard.module.scss"
import { ChartHumidity } from "../ChartHumidity/ChartHumidity"
import { ChartHistogram } from "../ChartHistogram/ChartHistogram"
import { ChartMovingAverage } from "../ChartMovingAverage/ChartMovingAverage"
import { useMemo, useState } from "react"
import { filterData } from "../../utils/filterByDays"
import { type ChartType } from "../../chart"
import { ChartCard } from "../ChartCard/ChartCard"

const MAX_DAYS = 5

export function Dashboard() {
  const { data, isLoading, error } = useGetWeather()
  const [type, setType] = useState<ChartType>("line")
  const [days, setDays] = useState(5)

  const filteredData = useMemo(() => {
    if (!data) return null
    return filterData(data, days)
  }, [data, days])

  const getDaysText = (days: number): string => {
    if (days === 1) return "день"
    if (days < 5) return "дня"
    return "дней"
  }

  if (isLoading) return <Spin />
  if (error) return <Alert message={error.message} type='error' />
  if (!filteredData) return <Alert message='Нет данных' type='warning' />

  return (
    <Layout className={styles.dashboard}>
      <div className={styles.container}>
        <Typography.Title level={2}>
          Данные о погоде за {days} {getDaysText(days)}
        </Typography.Title>
        <div className={styles.selectContainer}>
          <Typography.Text>Показать дней: </Typography.Text>
          <Select
            className={styles.select}
            value={days}
            onChange={setDays}
            options={Array.from({ length: MAX_DAYS }, (_, i) => ({
              label: i + 1,
              value: i + 1,
            }))}
          />
        </div>
        <ChartCard
          title='График температуры'
          controls={
            <Select
              options={[
                { label: "Линейный", value: "line" },
                { label: "Гистограмма ", value: "bar" },
              ]}
              value={type}
              onChange={(value) => setType(value as ChartType)}
            />
          }
        >
          <ChartTemperature weatherData={filteredData} chartType={type} />
        </ChartCard>
        <ChartCard title='График влажности'>
          <ChartHumidity weatherData={filteredData} />
        </ChartCard>
        <ChartCard title='Гистограмма распределения температуры'>
          <ChartHistogram weatherData={filteredData} />
        </ChartCard>
        <ChartCard title='Анализ трендов температуры'>
          <ChartMovingAverage weatherData={filteredData} />
        </ChartCard>
      </div>
    </Layout>
  )
}

import { useEffect, useMemo, useRef, useState } from "react"
import { getWeather, type WeatherResponse } from "../services/weatherApi"

export interface WeatherData {
  temperatures: number[]
  dates: string[]
  humidities: number[]
}

export const useGetWeather = (): {
  data: WeatherData | null
  isLoading: boolean
  error: Error | null
} => {
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const requestSent = useRef(false)

  useEffect(() => {
    if (!requestSent.current) {
      setIsLoading(true)

      requestSent.current = true
      getWeather("Moscow")
        .then((data) => {
          if (data) {
            setWeather(data)
          }
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false))
    }
  }, [])

  const data = useMemo((): WeatherData | null => {
    if (!weather) return null

    const temperatures: number[] = []
    const dates: string[] = []
    const humidities: number[] = []

    weather.list.forEach((item) => {
      temperatures.push(item.main.temp)
      dates.push(item.dt_txt.slice(5, 16))
      humidities.push(item.main.humidity)
    })

    return { temperatures, dates, humidities }
  }, [weather])

  return { data, isLoading, error }
}

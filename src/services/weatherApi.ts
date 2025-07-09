import { URL } from "../constants"

interface date {
  dt_txt: string
  main: {
    temp: number
    humidity: number
  }
}

export interface WeatherResponse {
  list: date[]
}

export const getWeather = async (city: string) => {
  const apiKey = import.meta.env.VITE_API_KEY
  try {
    const response = await fetch(
      `${URL}${city}&lang=ru&limit=100&units=metric&appid=${apiKey}`
    )

    if (!response.ok) {
      throw new Error("Ошибка запроса")
    }

    return response.json() as Promise<WeatherResponse>
  } catch (error) {
    console.log(error)
  }
}
